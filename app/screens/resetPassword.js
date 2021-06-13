import React, { useState } from "react";
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

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import StatusBarScreen from "../components/StatusBarScreen";

function resetPassword() {
  return (
    <StatusBarScreen>
      <ImageBackground
        style={styles.image}
        source={require("../assets/background.jpg")}
        resizeMode="stretch"
      >
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={styles.data}>
            <AppText style={styles.heading}>Reset Password</AppText>

            <View style={styles.instruction}>
              <AppText style={styles.para}>
                Email address verified! Set a new password
              </AppText>
            </View>
            <View>
              <AppTextInput placeholder="NEW PASSWORD" />
              <AppTextInput placeholder="RE-ENTER PASSWORD" />
            </View>
            <View style={{ marginBottom: 10 }} />
            <AppButton title="RESET PASSWORD" />
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <AppText>Have a account? </AppText>
              <TouchableOpacity onPress={() => console.log("Login")}>
                <AppText>Log in </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </StatusBarScreen>
  );
}
export default resetPassword;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  tinyLogo: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  heading: {
    fontSize: 30,
  },
  data: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  para: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  instruction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
});
