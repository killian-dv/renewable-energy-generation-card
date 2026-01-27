import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import type { Item1 } from "./card-section-1";
import { CircleGauge } from "./circle-gauge";

interface Section1ItemProps extends ComponentProps<"div"> {
  item: Item1;
}

export const Section1Item = ({ item, ...props }: Section1ItemProps) => {
  const { title, value, unit, gaugeColor } = item;
  // Format number with US notation (comma as thousands separator)
  const formattedValue = value.toLocaleString("en-US", {
    maximumFractionDigits: 1,
  });

  return (
    <div className="flex justify-between items-center" {...props}>
      <div className="flex gap-1">
        <CircleGauge className={cn("size-5", gaugeColor)} />
        <p className="text-text-muted font-medium">{title}</p>
      </div>
      <p className="text-2xl font-semibold leading-none lining-nums">
        {formattedValue}
        <sup className="text-text-muted text-xs leading-none font-medium">{` ${unit}`}</sup>
      </p>
    </div>
  );
};
