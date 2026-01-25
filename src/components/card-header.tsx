import { CardIconHeader } from "./card-icon-header";
import { CardTitleHeader } from "./card-title-header";

export const CardHeader = () => {
  return (
    <div className="flex flex-col">
      <CardIconHeader />
      <CardTitleHeader />
    </div>
  );
};
