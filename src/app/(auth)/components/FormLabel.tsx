"use client";

import { usePathname } from "next/navigation";

const FormLabel = () => {
  const pathname = usePathname();

  if (pathname === "/sign-in") {
    return (
      <>
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to sign in
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an <span className="text-yellow-500">account</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to register
        </p>
      </>
    );
  }
};

export default FormLabel;
