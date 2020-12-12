// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationButton from "./shared/NavigationButton";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.view_container}>
      <View style={styles.upper_container}>
        <Logo />

        <Text style={styles.text}>
          En elolycka kan orsaka allt från mindre allvarliga skador till
          medvetslöshet och hjärtstopp. Larma 112! Kontakt med sjukvården bör
          också tas även om elolyckan inte verkat vara så allvarlig.
        </Text>
      </View>

      <View style={styles.lower_container}>
        <NavigationButton
          text={"Vad ska du göra?"}
          onPress={() => navigation.navigate("You")}
        />

        <NavigationButton
          text={"Vad ska sjukvårdspersonal göra?"}
          onPress={() => navigation.navigate("Hospital")}
        />

        <NavigationButton
          text={"Vad ska arbetsgivare göra?"}
          onPress={() => navigation.navigate("Work")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  upper_container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "80%",
    textAlign: "center",
  },
  lower_container: { alignItems: "center" },
});

export default HomeScreen;
