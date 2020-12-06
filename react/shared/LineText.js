import React from "react";
import { Text } from "react-native";

export const LineText = ({ text }) => {
  return (
    <Text style={{ width: "80%", textAlign: "left", marginTop: 10 }}>
      {text}
    </Text>
  );
};
