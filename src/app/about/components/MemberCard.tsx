import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { TMyCard } from "@/types/types";

const MemberCard = ({ author, image }: TMyCard) => {
  return (
    <Card className="w-full max-w-[600px]">
      <CardHeader>
        <CardTitle>{author}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="baryshpicture"
          className="rounded-full w-full max-w-[200px]"
        />
      </CardContent>
    </Card>
  );
};

export default MemberCard;
