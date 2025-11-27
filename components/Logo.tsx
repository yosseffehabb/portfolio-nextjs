"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  color?: "wine" | "black";
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
  color = "wine",
}) => {
  const logoColor = color === "wine" ? "#7B1E32" : "#000000";

  const sizeClasses = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} shrink-0`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Modern stylized Y letter */}
        <path d="M18 4 L13 16 L18 16 L23 16 L18 4 Z" fill={logoColor} />
        <path
          d="M13 16 L13 28 M23 16 L23 28"
          stroke={logoColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      {showText && (
        <motion.span
          className={`font-bold ${
            color === "wine" ? "text-wine" : "text-black dark:text-white"
          } ${textSizes[size]} hidden sm:inline-block`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          yosseffehabb
        </motion.span>
      )}
    </Link>
  );
};

export default Logo;
