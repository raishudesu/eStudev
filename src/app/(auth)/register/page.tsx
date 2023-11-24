import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterForm from "../components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Thinksync",
  description: "Register to ThinkSync",
};
const SigninCard = () => {
  return (
    <Card className="mt-6 w-full max-w-md">
      <CardHeader>
        <CardTitle className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Register to Think<span className="text-[#FACC15]">Sync</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
};

export default SigninCard;
