import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Call_122 from "./shared/Call_112";
import Bullet from "./shared/Bullet";
import { LineText } from "./shared/LineText";
import Header from "./shared/Header";
import Logo from "./shared/logo";

const bullet_1 = [
  "Fått ström genom kroppen ",
  "Träffats av ljusbåge",
  "Blivit medvetslös, omtöcknad eller känner dig sjuk",
  "Har fått brännskador",
  "Varit utsatt för blixt",
  "Har tecken på nervskador som förlamning, balansproblem eller domningar",
];

const line_1 = [
  "Anmäl olyckan till din arbetsgivare.",
  "Rapportera om olyckan till arbetsgivarens försäkringsbolag, AFA.",
  "Se till att du får medicinsk uppföljning om du drabbats av strömgenomgång eller ljusbåge.",
  "Ansök hos Försäkringskassan om arbetsskadeersättning. Behöver du hjälp kontaktar du ditt skyddsombud!",
];

export default YouScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.outer_view}>
          <Logo />

          <Header text={"Vad ska du göra"} />

          <LineText
            text={
              "Efter en el-olycka ska du larma 112. Uppsök alltid sjukvård om du:"
            }
          />

          <View style={styles.bullet_view}>
            {bullet_1.map((text) => (
              <Bullet text={text} key={text} />
            ))}
          </View>

          <LineText
            text={
              " Kontakt med sjukvården bör också tas även om elolyckan inte verkat vara så allvarlig."
            }
          />

          <Call_122 />

          <View style={styles.text_view}>
            {line_1.map((text) => (
              <LineText text={text} key={text} />
            ))}
          </View>
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  outer_view: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text_view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet_view: { width: "70%" },
});
