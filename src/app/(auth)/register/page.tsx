import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RegisterForm from "../components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Thinksync",
  description: "Register to ThinkSync",
};
const SigninCard = () => {
  return (
    <Card className="mt-6 w-full max-w-md">
      <CardHeader></CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
};

export default SigninCard;
