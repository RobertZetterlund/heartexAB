import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Bullet = ({ text }) => {
  return (
    <View style={styles.row}>
      <View style={styles.bullet}>
        <Text>{"\u2022" + " "}</Text>
      </View>
      <View style={styles.bulletText}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 1,
    marginVertical: 4,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
    color: "black",
  },
});
