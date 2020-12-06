// In App.js in a new project

import * as React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HospitalScreen from "./react/hospital";
import YouScreen from "./react/you";
import WorkScreen from "./react/work";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#f49c14",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="You" component={YouScreen} />
        <Stack.Screen name="Hospital" component={HospitalScreen} />
        <Stack.Screen name="Work" component={WorkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const NavigationButton = (props) => {
  const { text, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f49c14",
        borderRadius: 30,
        justifyContent: "center",
        margin: 10,
      }}
      onPress={onPress}
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

export default App;
