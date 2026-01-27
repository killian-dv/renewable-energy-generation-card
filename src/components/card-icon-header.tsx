import {
  BatteryEcoChargingIcon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const CardIconHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <HugeiconsIcon
        icon={BatteryEcoChargingIcon}
        size={32}
        className="opacity-80"
      />
      <HugeiconsIcon icon={MoreHorizontalIcon} size={32} />
    </div>
  );
};
