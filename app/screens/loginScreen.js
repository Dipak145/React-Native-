import React, { useState } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  Text,
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
import { TextInput } from "react-native-paper";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("* Email"),
  password: Yup.string().required().min(6).label("* Password"),
});

function LoginScreen() {
  const [text, setText] = useState("Email");

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
          <View style={styles.input}>
            <TextInput
              label="Email"
              value={text}
              onChangeText={(t) => setText(t)}
            />
          </View>

          <View>
            <View style={styles.button}>
              <AppButton title="LOG IN" />
            </View>
            <View style={styles.text}>
              <AppText>Dont't have an account?</AppText>
              <AppText>Create one</AppText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </StatusBarScreen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 50,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  tinyLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  button: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
