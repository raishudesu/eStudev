"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import mazeDark from "@/assets/maze.svg";
import mazeLight from "@/assets/maze-light.svg";

const CardBg = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Image src={mazeDark} className="opacity-20" alt="maze" />
      ) : (
        <Image src={mazeLight} className="opacity-10" alt="maze" />
      )}
    </>
  );
};

export default CardBg;
