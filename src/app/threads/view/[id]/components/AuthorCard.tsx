import maleAvatar from "@/assets/male-avatar.svg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { getUser } from "@/stores/users";
import { useQuery } from "@tanstack/react-query";
import { ProfileSkeletons } from "@/components/Skeletons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type TAuthor = {
  id: string;
  username: string;
  email: string;
  bio: string;
  links: string[];
};

const AuthorCard = ({ author }: { author: TAuthor }) => {
  const session = useSession();
  const user = session.data?.user;
  const { id, username, email, bio, links } = author;

  return (
    <div className="w-full flex flex-col gap-6">
      <Card className="w-full">
        <CardHeader className="flex flex-col">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Author
          </h4>
          <Image
            src={maleAvatar}
            alt="male-avatar"
            className="self-center max-w-[16rem]"
          />
          <CardDescription className="flex flex-col">
            <span className="text-foreground scroll-m-20 text-2xl font-semibold tracking-tight">
              {username}
            </span>
            <small className=" text-sm font-medium leading-none">{email}</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">{bio}</p>
          </div>
          <Link href={""} className="text-blue-500">
            {links}
          </Link>
          {id == user?.id ? null : (
            <div className="flex flex-col md:flex-row gap-3">
              <Button className="self-stretch md:self-start">Follow</Button>
              <Button
                variant={"secondary"}
                className="self-stretch md:self-start"
              >
                <Share2 size={15} />
              </Button>
            </div>
          )}
          <div className="flex gap-6">
            <small className=" text-sm font-medium leading-none">
              1,000 Followers
            </small>
            <small className=" text-sm font-medium leading-none">
              10 Following
            </small>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              698 contributions in the last year
            </h4>
            <small className=" text-sm font-medium leading-none">
              Contributed to various threads accross the platform.
            </small>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Contribution activity
            </h4>
            <small className=" text-sm font-medium leading-none">
              Created 65 threads, 45 comments, 68 replies, and 10 resources.
            </small>
          </div>
        </CardContent>
        <CardFooter className="flex gap-6"></CardFooter>
      </Card>
    </div>
  );
};

export default AuthorCard;
