import { CardIconHeader } from "./card-icon-header";
import { CardTitleHeader } from "./card-title-header";

const headerAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export const CardHeader = () => {
  return (
    <div className="flex flex-col gap-1">
      <CardIconHeader
        {...headerAnimation}
        transition={{ duration: 0.28, ease: "easeOut" }}
      />
      <CardTitleHeader
        {...headerAnimation}
        transition={{ duration: 0.28, delay: 0.1, ease: "easeOut" }}
      />
    </div>
  );
};
