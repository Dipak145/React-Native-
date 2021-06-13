import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import StatusBarScreen from "../components/StatusBarScreen";

function homeScreen() {
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

export default homeScreen;

const styles = StyleSheet.create({
  upperComponent: {
    width: "100%",
    height: 90,
    backgroundColor: "dodgerblue",
    display: "flex",
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
