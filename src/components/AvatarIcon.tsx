import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import maleAvatar from "@/assets/male-avatar.svg";

const AvatarIcon = async () => {
  const session = await getServerSession(authOptions);
  const username = session?.user.username;

  const getFirstChar = () => {
    return username?.charAt(0).toUpperCase();
  };
  return (
    <Avatar>
      <AvatarImage src="https://i.imgur.com/ghzTF6W.png" alt="male-avatar" />
      <AvatarFallback>{getFirstChar()}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
