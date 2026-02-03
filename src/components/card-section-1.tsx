import { Section1Item } from "./section-1-item";

export type Item1 = {
  title: string;
  value: number;
  unit: string;
  gaugeColor: string;
};

const ITEMS: Item1[] = [
  {
    title: "Total Renewable Generation",
    value: 4285,
    unit: "MW",
    gaugeColor: "text-[#C0D551]",
  },
  {
    title: "Installed Renewable Capacity",
    value: 5600,
    unit: "MW",
    gaugeColor: "text-[#C76E33]",
  },
  {
    title: "Capacity Utilization",
    value: 76.5,
    unit: "%",
    gaugeColor: "text-[#6C8BBE]",
  },
];

const sectionItemAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const ITEM_DELAY = 0.08;

export const CardSection1 = () => {
  return (
    <div className="flex flex-col gap-2">
      {ITEMS.map((item, index) => (
        <Section1Item
          key={item.title}
          item={item}
          {...sectionItemAnimation}
          transition={{
            duration: 0.28,
            delay: 0.35 + index * ITEM_DELAY,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};
