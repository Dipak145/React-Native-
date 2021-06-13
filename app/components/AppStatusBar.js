import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import StatusBarScreen from "./StatusBarScreen";
import AppText from "./AppText";
import Constants from "expo-constants";

function AppStatusBar(props) {
  return (
    <StatusBarScreen>
      <View style={styles.upperComponent}>
        <Image style={styles.logo} source={require("../assets/profile.png")} />
        <AppText style={styles.name}>David W</AppText>
        <View style={styles.pointComponent}>
          <View style={styles.points}>
            <AppText>Points</AppText>
            <AppText>45</AppText>
          </View>
          <Image
            style={styles.pointsLogo}
            source={require("../assets/points.png")}
          />
        </View>
      </View>
    </StatusBarScreen>
  );
}

const styles = StyleSheet.create({
  upperComponent: {
    width: "100%",
    height: 90,
    backgroundColor: "dodgerblue",
    display: "flex",
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    alignSelf: "center",
  },
  points: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    alignSelf: "center",
    marginLeft: 60, // not set properly
  },
  pointsLogo: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  pointComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
  },
});

export default AppStatusBar;
