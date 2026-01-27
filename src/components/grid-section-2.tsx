import type { ComponentProps } from "react";

export const GridSection2 = ({ children, ...props }: ComponentProps<"div">) => {
  return (
    <div className="grid grid-cols-2 gap-4" {...props}>
      {children}
    </div>
  );
};
