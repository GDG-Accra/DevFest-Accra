import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = ({ className = "", ...props }: InputProps) => (
  <input
    className={`px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base w-full rounded-md transition duration-150 ease-in-out ${className}`}
    {...props}
  />
);
