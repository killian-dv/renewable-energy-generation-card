import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { CircleGauge } from "./circle-gauge";

interface Section1ItemProps extends ComponentProps<"div"> {
  title: string;
  value: number;
  unit: string;
  gaugeColor: string;
}

export const Section1Item = ({
  title,
  value,
  unit,
  gaugeColor,
  ...props
}: Section1ItemProps) => {
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
