import { Card } from "../components/card";
import { CardHeader } from "../components/card-header";
import { CardSection1 } from "../components/card-section-1";
import { CardSection2 } from "../components/card-section-2";
import { CardSectionSeparator } from "../components/card-section-separator";

const separatorAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export const RenewableEnergyCard = () => {
  return (
    <Card>
      <CardHeader />
      <CardSectionSeparator
        {...separatorAnimation}
        transition={{ duration: 0.22, delay: 0.25, ease: "easeOut" }}
      />
      <CardSection1 />
      <CardSectionSeparator />
      <CardSection2 />
    </Card>
  );
};
