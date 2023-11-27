import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SignInForm from "../components/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Thinksync",
  description: "Sign in to ThinkSync",
};

const SigninCard = () => {
  return (
    <Card className="mt-6 w-full max-w-sm">
      <CardHeader></CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default SigninCard;
