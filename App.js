import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#f49c14",
            margin: 10,
          }}
        />

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
    <Pressable
      style={{
        backgroundColor: "#f49c14",
        borderRadius: 30,
        justifyContent: "center",
        margin: 10,
      }}
    >
      <Text style={{ color: "white", padding: 10 }}>{text}</Text>
    </Pressable>
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
