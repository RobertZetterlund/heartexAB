// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NavigationButton from "./shared/NavigationButton";
import LocalizationContext from "./i18n/LocalizationContext";

function HomeScreen({ navigation }) {
  const { t, i18n } = React.useContext(LocalizationContext);

  return (
    <View style={styles.view_container}>
      <View style={styles.upper_container}>
        <Logo />

        <Text style={styles.text}>
          {t("about_accidents")}
        </Text>
      </View>

      <View style={styles.lower_container}>
        <NavigationButton
          text={t("what_should_you_do")}
          onPress={() => navigation.navigate("You")}
        />

        <NavigationButton
          text={t("what_should_medical_do")}
          onPress={() => navigation.navigate("Hospital")}
        />

        <NavigationButton
          text={t("what_should_employer_do")}
          onPress={() => navigation.navigate("Work")}
        />
      </View>

      <Button
        title={"change language"}
        onPress={() => {
          if (i18n.language == "se") i18n.changeLanguage("en");
          else i18n.changeLanguage("se");
        }}
      ></Button>
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
