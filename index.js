import { registerRootComponent } from "expo";
import { StatusBar } from "react-native";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
StatusBar.setBarStyle("dark-content", true);
