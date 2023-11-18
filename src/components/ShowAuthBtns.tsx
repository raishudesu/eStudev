import { getServerSession } from "next-auth";
import AuthBtns from "./AuthBtns";

const ShowAuthBtns = async () => {
  const session = await getServerSession();

  if (session) return null;
  return <AuthBtns />;
};

export default ShowAuthBtns;
