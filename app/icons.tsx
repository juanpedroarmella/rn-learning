import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { ComponentProps } from "react";

export const CircleInfoIcon = (props: ComponentProps<typeof FontAwesome6>) => (
  <FontAwesome6 {...props} name="circle-info" />
);

export const HomeIcon = (
  props: Omit<ComponentProps<typeof FontAwesome>, "name">,
) => <FontAwesome {...props} name="home" />;
