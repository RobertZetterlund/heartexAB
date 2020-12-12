import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Call_122 from "./shared/Call_112";
import Bullet from "./shared/Bullet";
import { LineText } from "./shared/LineText";
import Header from "./shared/Header";
import Logo from "./shared/logo";

const healthcare_personel = [
  "Strömolycka kan medföra akuta skador. Allvarliga hälsoproblem kan utvecklas långt senare.",
  "Speciellt känsligt är hjärta, muskler, hud och nervsystem.",
  "Det är viktigt att följa upp personer som har varit utsatta för strömgenomgång – både personer som drabbats av strömgenomgång eller ljusbåge ska undersökas akut. Skador som drabbar hjärta, muskler, hud och nervsystem kan utvecklas över tid. Rekommendation om återbesök efter 1-3 månader.",
];

const anamnesen = [
  "Tidpunkt och plats för olyckan",
  "Spänningsnivå (V)",
  "Strömmens väg genom kroppen (in/utgång)",
  "Har den utsatte suttit fast till följd av strömgenomgången och går det att uppskatta hur länge?",
  "Uppgifter om medvetandepåverkan och förlamning",
];
const recommended_med = [
  "Neurologstatus inklusive medvetandenivå",
  "Hudstatus, hela kroppen (hudtemperatur, hudfärg, brännskador, in/utgång för strömmen)",
  "Leder/muskler (frakturer, kompartmentsyndrom, dokumentera arm- och benomfång inklusive mätpunkter)",
  "Hjärtstatus, blodtryck (OBS! båda armarna p g a risk för att kärlskada uppstått)",
  "Perifera pulsar (aa carotis, radialis, ulnaris, femoralis, tibialis posterior)",
  "Allens test",
  "Öronstatus (spräckt trumhinna?)",
  "Ögonstatus/syn",
  "Psykisk status (”nära döden upplevelser”)",
];

export default HospitalScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.outer_view}>
          <Logo />

          <Header text={"Vad sjukvårdspersonal ska göra"} />

          <View style={styles.text_view}>
            {healthcare_personel.map((text) => (
              <LineText text={text} key={text} />
            ))}
          </View>

          <Header text={"Var noga med anamnesen"} />
          <View style={styles.bullet_view}>
            {anamnesen.map((text) => (
              <Bullet text={text} key={text} />
            ))}
          </View>

          <Header text={"Rekommenderade medicinska undersökningar"} />
          <View style={styles.bullet_view}>
            {recommended_med.map((text) => (
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
    width: "100%",
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
