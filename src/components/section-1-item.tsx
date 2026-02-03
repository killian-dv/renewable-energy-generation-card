import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { useCountUpValue } from "../hooks/useCountUpValue";
import { getDelaySeconds } from "../lib/transition";
import { cn } from "../lib/utils";
import type { Item1 } from "./card-section-1";
import { CircleGauge } from "./circle-gauge";

type MotionDivProps = ComponentProps<typeof motion.div>;

interface Section1ItemProps extends MotionDivProps {
  item: Item1;
}

export const Section1Item = ({
  item,
  transition,
  ...props
}: Section1ItemProps) => {
  const { title, value, unit, gaugeColor } = item;
  const displayValue = useCountUpValue(value, getDelaySeconds(transition));

  const formattedValue = displayValue.toLocaleString("en-US", {
    maximumFractionDigits: Number.isInteger(value) ? 0 : 1,
  });

  return (
    <motion.div
      className="flex justify-between items-center"
      transition={transition}
      {...props}
    >
      <div className="flex gap-1">
        <CircleGauge className={cn("size-5", gaugeColor)} />
        <p className="text-text-muted font-medium">{title}</p>
      </div>
      <p className="text-2xl font-semibold leading-none lining-nums tabular-nums flex items-baseline">
        {formattedValue}
        <sup className="text-text-muted text-xs leading-none font-medium">{` ${unit}`}</sup>
      </p>
    </motion.div>
  );
};
