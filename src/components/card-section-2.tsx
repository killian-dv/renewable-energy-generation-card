import {
  BiomassEnergyIcon,
  HydroPowerIcon,
  Sun02Icon,
  WindPowerIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { motion } from "motion/react";
import { GridSection2 } from "./grid-section-2";
import { Section2Item } from "./section-2-item";

export type Item2 = {
  title: string;
  value: number;
  unit: string;
  icon: IconSvgElement;
  iconColor: string; // Hex color code (e.g., "#CDA185")
};

const ITEMS: Item2[] = [
  {
    title: "Solar Power Output",
    value: 76.5,
    unit: "MW",
    icon: Sun02Icon,
    iconColor: "#CDA185",
  },
  {
    title: "Wind Power Output",
    value: 1270,
    unit: "MW",
    icon: WindPowerIcon,
    iconColor: "#92A8C2",
  },
  {
    title: "Hydro Power Output",
    value: 920,
    unit: "MW",
    icon: HydroPowerIcon,
    iconColor: "#768C81",
  },
  {
    title: "Biomass Power Output",
    value: 245,
    unit: "MW",
    icon: BiomassEnergyIcon,
    iconColor: "#9192CB",
  },
];

const scalePopAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: [0, 1.05, 1], opacity: [0, 1, 1] },
};

const bottomTextAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const ITEM_DELAY = 0.12;
const SCALE_DURATION = 0.5;
const BOTTOM_TEXT_DELAY = 0.6 + (ITEMS.length - 1) * ITEM_DELAY;

export const CardSection2 = () => {
  return (
    <div className="flex flex-col gap-4">
      <GridSection2>
        {ITEMS.map((item, index) => (
          <Section2Item
            key={item.title}
            item={item}
            {...scalePopAnimation}
            transition={{
              duration: SCALE_DURATION,
              delay: 0.6 + index * ITEM_DELAY,
              times: [0, 0.5, 1],
              ease: ["easeInOut", "easeInOut"],
            }}
          />
        ))}
      </GridSection2>
      <motion.p
        className="text-text-muted font-semibold text-sm"
        {...bottomTextAnimation}
        transition={{
          duration: 0.28,
          delay: BOTTOM_TEXT_DELAY,
          ease: "easeOut",
        }}
      >
        Expected generation increase based on weather prediction
      </motion.p>
    </div>
  );
};
