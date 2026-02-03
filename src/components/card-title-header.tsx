import { motion } from "motion/react";
import type { ComponentProps } from "react";

export const CardTitleHeader = ({
  ...props
}: ComponentProps<typeof motion.div>) => {
  return (
    <motion.div className="flex" {...props}>
      <h1 className="text-xl font-semibold">Renewable Energy Generation</h1>
    </motion.div>
  );
};
