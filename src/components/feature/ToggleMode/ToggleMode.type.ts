import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type IconType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
