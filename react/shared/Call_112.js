import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default Call_112 = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Ring 112</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f49c14",
    borderRadius: 30,
    justifyContent: "center",
    margin: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
