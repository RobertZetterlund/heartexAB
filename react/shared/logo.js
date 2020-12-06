import { View, Image, StyleSheet } from "react-native";
import React from "react";

export default Logo = () => {
  return (
    <Image
      style={{ height: 150, width: 150, margin:10 }}
      source={require("../../elolycka.png")}
    ></Image>
  );
};
