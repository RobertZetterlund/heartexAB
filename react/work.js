import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Call_122 from "./shared/Call_112";
import Bullet from "./shared/Bullet";
import { LineText } from "./shared/LineText";
import Header from "./shared/Header";
import Logo from "./shared/logo";

const work_do = [
  "Tillkalla ambulans genom SOS Alarm, genom att ringa 112.",
  "Tillkalla de som kan ge första hjälpen och HLR.",
  "Ge första hjälpen.",
  "Skicka ut personer att leda ambulans till platsen",
  "Se till att någon följer med till sjukhuset",
  "Se till att skyddsombud kallas till platsen och blir informerad om situationen.",
  "Vid allvarlig olycka säkras platsen och arbetsgivaren kontaktar polisen.",
];

const work_do2 = [
  "Arbetsgivaren måste skyndsamt anmäla olyckan till arbetsmiljöverket.",
  "En så kallad paragraf 2-anmälan ska alltid göras. I 2 § i arbetsmiljöförordningen står följande: ”Har olycksfall eller annan skadlig inverkan i arbete föranlett dödsfall eller svårare personskada eller samtidigt drabbat flera arbetstagare, skall arbetsgivaren utan dröjsmål underrätta Arbetsmiljöverket.",
];

const work_do3 = [
  "Arbetsgivaren ska eventuellt i samråd med skyddsombud anmäla arbetsskadorna som drabbat personen till Försäkringskassan.",
  "Nätägare ska även anmäla olycka med strömgenomgång/ljusbåge till Elsäkerhetsverket.",
];

const work_do4 = [
  "Den skadade",
  "Anhöriga till den drabbade",
  "Arbetskollegor",
  "Ta emot och informera massmedia",
];

export default WorkScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.outer_view}>
          <Logo />

          <Header text={"Vad arbetsgivaren ska göra"} />

          <LineText
            text={
              "När en allvarlig arbetsplatsolycka inträffar är arbetsgivaren skyldig att göra följande eller se till att det blir gjort:"
            }
          />

          <View style={{ width: "70%" }}>
            {work_do.map((text) => (
              <Bullet text={text} key={text} />
            ))}
          </View>

          <Call_122 />

          <View style={styles.text_view}>
            {work_do2.map((text) => (
              <LineText text={text} key={text} />
            ))}
          </View>

          <Call_122 />

          <View style={styles.text_view}>
            {work_do3.map((text) => (
              <LineText text={text} key={text} />
            ))}
          </View>

          <Header text={"Arbetsgivaren ska följa upp"} />
          <View style={{ width: "70%" }}>
            {work_do4.map((text) => (
              <Bullet text={text} key={text} />
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
