import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { useCountUpValue } from "../hooks/useCountUpValue";
import { getDelaySeconds } from "../lib/transition";
import type { Item2 } from "./card-section-2";

type Section2ItemProps = ComponentProps<typeof motion.div> & {
  item: Item2;
};

export const Section2Item = ({ item, transition, ...props }: Section2ItemProps) => {
  const { title, value, unit, icon, iconColor } = item;
  const displayValue = useCountUpValue(value, getDelaySeconds(transition));

  const formattedValue = displayValue.toLocaleString("en-US", {
    maximumFractionDigits: Number.isInteger(value) ? 0 : 1,
  });

  return (
    <motion.div
      className="relative flex flex-col gap-1 bg-black rounded-lg p-3 overflow-hidden"
      transition={transition}
      {...props}
    >
      <p className="text-[26px] font-bold leading-none lining-nums tabular-nums">
        {formattedValue}
        <sup className="text-text-muted text-xs leading-none font-medium">{` ${unit}`}</sup>
      </p>
      <p className="text-text-muted font-semibold text-sm">{title}</p>
      <ItemIcon icon={icon} iconColor={iconColor} />
    </motion.div>
  );
};

const ItemIcon = ({
  icon,
  iconColor,
}: {
  icon: IconSvgElement;
  iconColor: string;
}) => {
  // Convert hex color to rgba with 20% opacity for background
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const bgColor = hexToRgba(iconColor, 0.2);
  return (
    <div
      className="absolute -bottom-2 -right-2 -translate-x-0.25 -translate-y-0.25 flex items-center justify-center rounded-full p-2"
      style={{ backgroundColor: bgColor }}
    >
      <HugeiconsIcon icon={icon} size={28} style={{ color: iconColor }} />
    </div>
  );
};
