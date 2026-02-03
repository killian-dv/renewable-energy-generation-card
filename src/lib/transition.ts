/**
 * Extracts delay in seconds from a motion transition object.
 */
export const getDelaySeconds = (transition: unknown): number => {
  if (transition && typeof transition === "object" && "delay" in transition) {
    const d = (transition as { delay?: number }).delay;
    return typeof d === "number" ? d : 0;
  }
  return 0;
};
