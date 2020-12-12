// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HospitalScreen from "./react/hospital";
import YouScreen from "./react/you";
import WorkScreen from "./react/work";
import HomeScreen from "./react/home";
import LocalizationProvider from "./react/i18n/LocalizationProvider";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <LocalizationProvider>
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
    </LocalizationProvider>
  );
};
