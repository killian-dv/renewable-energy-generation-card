import { Section1Item } from "./section-1-item";

type Item = {
  title: string;
  value: number;
  unit: string;
  gaugeColor: string;
};

const ITEMS: Item[] = [
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

export const CardSection1 = () => {
  return (
    <div className="flex flex-col gap-2">
      {ITEMS.map((item) => (
        <Section1Item
          key={item.title}
          title={item.title}
          value={item.value}
          unit={item.unit}
          gaugeColor={item.gaugeColor}
        />
      ))}
    </div>
  );
};
