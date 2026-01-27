import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

export const CircleGauge = ({ className, ...props }: ComponentProps<"svg">) => {
  // Circle parameters
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 8;

  // Calculate dash array
  // 3/4 full = 75% of circumference
  const fullSegment = circumference * 0.75;
  // Remaining 1/4 = 25% of circumference
  // Split into 2 equal segments with 3 equal gaps
  // Pattern: [full, gap1, seg1, gap2, seg2, gap3]
  // Equation: 75% + gap + seg + gap + seg + gap = 100%
  // So: 2*seg + 3*gap = 25%
  // If segments are 2x the size of gaps: 2*(2*gap) + 3*gap = 25% => 7*gap = 25%
  const remainingQuarter = circumference * 0.25;
  const gapSize = remainingQuarter / 7; // Each gap is 1/7 of the remaining quarter
  const segmentSize = gapSize * 2; // Each segment is 2x the gap size

  // Dash array: [full segment, gap, segment 1, gap, segment 2, gap to complete]
  const dashArray = `${fullSegment} ${gapSize} ${segmentSize} ${gapSize} ${segmentSize} ${gapSize}`;

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className={cn("transform -rotate-90", className)}
      {...props}
    >
      {/* Main gauge circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dashArray}
        strokeDashoffset="0"
      />
    </svg>
  );
};
