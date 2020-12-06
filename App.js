import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "./react/shared/logo";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />

        <Text style={{ width: "80%", textAlign: "center" }}>
          En elolycka kan orsaka allt från mindre allvarliga skador till
          medvetslöshet och hjärtstopp. Larma 112! Kontakt med sjukvården bör
          också tas även om elolyckan inte verkat vara så allvarlig.
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <NavigationButton text={"Vad ska du göra?"} />

        <NavigationButton text={"Vad ska sjukvårdspersonal göra?"} />

        <NavigationButton text={"Vad ska arbetsgivare göra?"} />
      </View>
    </View>
  );
}

const NavigationButton = (props) => {
  const { text } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f49c14",
        borderRadius: 30,
        justifyContent: "center",
        margin: 10,
      }}
    >
      <Text style={{ color: "white", padding: 10 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
