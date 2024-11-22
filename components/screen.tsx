import { View, ViewProps } from "react-native";

export default function Screen({
  children,
  className,
  ...props
}: { children: React.ReactNode } & ViewProps) {
  return (
    <View {...props} className={` bg-black pt-4 px-6 ${className}`}>
      {children}
    </View>
  );
}
