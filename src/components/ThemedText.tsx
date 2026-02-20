import React from "react";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  className?: string;
}

export function ThemedText({
  className = "",
  style,
  ...props
}: ThemedTextProps) {
  // Use font-urdu by default
  const defaultClassName = "font-urdu text-black";

  return (
    <Text
      className={`${defaultClassName} ${className}`}
      style={style}
      {...props}
    />
  );
}
