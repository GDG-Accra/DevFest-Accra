import React, { ReactNode } from "react";

type CardContentProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ children, className = "", ...props }: CardContentProps) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);
