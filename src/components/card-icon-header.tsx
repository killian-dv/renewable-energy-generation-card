import {
  BatteryEcoChargingIcon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const CardIconHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <HugeiconsIcon icon={BatteryEcoChargingIcon} />
      <HugeiconsIcon icon={MoreHorizontalIcon} />
    </div>
  );
};
