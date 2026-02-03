import { animate } from "motion";
import { useEffect, useState } from "react";

const MIN_DURATION = 0.65;
const DURATION_PER_UNIT = 0.00035;
const MAX_DURATION = 2.2;

/**
 * Returns duration in seconds based on target value: larger numbers take longer.
 * Capped so very large numbers (e.g. 5600) finish a bit earlier.
 */
function getDurationFromValue(value: number): number {
  const duration = MIN_DURATION + value * DURATION_PER_UNIT;
  return Math.max(MIN_DURATION, Math.min(duration, MAX_DURATION));
}

/**
 * Returns a value that counts up from 0 to target over duration, starting after delay.
 * Duration is proportional to the target value so larger numbers take longer to count.
 */
export function useCountUpValue(
  value: number,
  delaySeconds: number,
  durationSeconds?: number,
): number {
  const [display, setDisplay] = useState(0);
  const duration = durationSeconds ?? getDurationFromValue(value);

  useEffect(() => {
    let cancelled = false;
    let controls: { stop: () => void } | undefined;

    const startAnimation = () => {
      if (cancelled) return;
      controls = animate(0, value, {
        duration,
        ease: "easeInOut",
        onUpdate: (v) => {
          if (!cancelled) setDisplay(v);
        },
      });
    };

    const timeoutId = setTimeout(startAnimation, delaySeconds * 1000);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      controls?.stop();
    };
  }, [value, delaySeconds, duration]);

  return display;
}
