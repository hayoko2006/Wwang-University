"use client";
import Image from "next/image";
// No longer need useTheme, useEffect, or useState for this logic
import type { FC } from "react";

interface ChickenProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const sizeConfig = {
  small: { width: 120, height: 24.7 },
  medium: { width: 200, height: 41.1 },
  large: { width: 270, height: 55.5 },
};

export const WCUFavicon: FC<ChickenProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex justify-center ${className} mb-4`}>
      <Image
        src="https://q.qlogo.cn/g?b=qq&nk=553535228&s=100"
        alt="神圣大旺帝国旺学 Favicon"
        width={40}
        height={40}
        priority
        className="object-contain"
      />
    </div>
  );
};

const Chicken: FC<ChickenProps> = ({ size = "large", className = "" }) => {
  const { width, height } = sizeConfig[size];

  return (
    <div
      className={`relative inline-block ${className} mb-4`}
      style={{ width, height }}
    >
      <Image
        src="https://q.qlogo.cn/g?b=qq&nk=553535228&s=100"
        alt="神圣大旺帝国旺学 Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Chicken;
