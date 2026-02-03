import { motion } from "motion/react";
import type { ComponentProps } from "react";

export const CardSectionSeparator = ({
  ...props
}: ComponentProps<typeof motion.div>) => {
  return <motion.div className="w-full h-px bg-white/10 my-3" {...props} />;
};
