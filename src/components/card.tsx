import type { ComponentProps } from "react";

export const Card = ({ children, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className="bg-card-background text-card-foreground rounded-2xl p-4 w-md"
      {...props}
    >
      {children}
    </div>
  );
};
