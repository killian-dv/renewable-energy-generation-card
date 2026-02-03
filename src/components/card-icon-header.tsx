import {
  BatteryEcoChargingIcon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

export const CardIconHeader = ({
  ...props
}: ComponentProps<typeof motion.div>) => {
  return (
    <motion.div
      className="flex flex-row justify-between items-center"
      {...props}
    >
      <HugeiconsIcon
        icon={BatteryEcoChargingIcon}
        size={32}
        className="opacity-80"
      />
      <HugeiconsIcon icon={MoreHorizontalIcon} size={32} />
    </motion.div>
  );
};
