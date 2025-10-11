import { BillsIcon } from "../Icon/BillsIcon";
import type { IIconCard } from "./IconCard.types";

const ICON_CARD_DEFAULT_PROPS: IIconCard = {
  description:
    "Traffic grows, performance suffers, costs skyrocket. Legacy hosts like Pantheon and Acquia charge more as you succeed, while throttling resources when you need them most.",
  Icon: BillsIcon,
  title: "Hosting bills that punish your success",
  variant: "default",
};

export const ICON_CARD_EXAMPLE_PROPS = {
  default: ICON_CARD_DEFAULT_PROPS,
};
