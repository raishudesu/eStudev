import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const AvatarIcon = async () => {
  const session = await getServerSession(authOptions);
  const username = session?.user.username;

  const getFirstChar = () => {
    return username?.charAt(0).toUpperCase();
  };
  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback>{getFirstChar()}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
