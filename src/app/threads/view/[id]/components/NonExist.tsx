import Link from "next/link";
import React from "react";

const NonExist = () => {
  return (
    <span>
      You&apos;re looking for something that does not exist.{" "}
      <Link href={"/threads"} className="text-blue-500 hover:underline">
        Go back
      </Link>
    </span>
  );
};

export default NonExist;
