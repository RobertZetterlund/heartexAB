import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default NavigationButton = (props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f49c14",
    borderRadius: 30,
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: "white",
    padding: 10,
  },
});
