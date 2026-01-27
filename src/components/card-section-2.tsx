import {
  BiomassEnergyIcon,
  HydroPowerIcon,
  Sun02Icon,
  WindPowerIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
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

export const CardSection2 = () => {
  return (
    <div className="flex flex-col gap-4">
      <GridSection2>
        {ITEMS.map((item) => (
          <Section2Item key={item.title} item={item} />
        ))}
      </GridSection2>
      <p className="text-text-muted font-semibold text-sm">
        Expected generation increase based on weather prediction
      </p>
    </div>
  );
};
