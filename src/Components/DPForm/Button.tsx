import React, { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
};

export const Button = ({
  children,
  className = "",
  variant = "solid",
  ...props
}: ButtonProps) => {
  const base =
    variant === "outline"
      ? "border border-blue-500 text-blue-500 bg-white hover:bg-blue-50"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out ${base} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
