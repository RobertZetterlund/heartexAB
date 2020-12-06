import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Call_122 from "./shared/Call_112";
import Bullet from "./shared/Bullet";
import { LineText } from "./shared/LineText";
import Header from "./shared/Header";
import Logo from "./shared/logo";

export default Instructions = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />

          <Header text={"Vad ska du göra"} />

          <LineText
            text={
              "Efter en el-olycka ska du larma 112. Uppsök alltid sjukvård om du:"
            }
          />

          <View style={{ width: "70%" }}>
            <Bullet text={"Fått ström genom kroppen "} />
            <Bullet text={"Träffats av ljusbåge"} />
            <Bullet
              text={"Blivit medvetslös, omtöcknad eller känner dig sjuk"}
            />
            <Bullet text={"Har fått brännskador"} />
            <Bullet text={"Varit utsatt för blixt"} />
            <Bullet
              text={
                "Har tecken på nervskador som förlamning, balansproblem eller domningar"
              }
            />
          </View>

          <LineText
            text={
              " Kontakt med sjukvården bör också tas även om elolyckan inte verkat vara så allvarlig."
            }
          />

          <Call_122 />

          <LineText text={"Anmäl olyckan till din arbetsgivare."} />

          <LineText
            text={
              "Rapportera om olyckan till arbetsgivarens försäkringsbolag, AFA."
            }
          />

          <LineText
            text={
              "Se till att du får medicinsk uppföljning om du drabbats av strömgenomgång eller ljusbåge."
            }
          />

          <LineText
            text={
              "Ansök hos Försäkringskassan om arbetsskadeersättning. Behöver du hjälp kontaktar du ditt skyddsombud!"
            }
          />
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
});
