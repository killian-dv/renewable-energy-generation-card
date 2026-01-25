import type { ComponentProps } from "react";

export const Card = ({ children, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className="bg-card-background text-card-foreground rounded-lg p-4 w-96"
      {...props}
    >
      {children}
    </div>
  );
};
