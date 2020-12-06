import React from "react";
import FastImage from "react-native-fast-image";

export default Logo = () => {
  return (
    <FastImage
      style={{ width: 150, height: 150 }}
      source={require("../../elolycka.png")}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
