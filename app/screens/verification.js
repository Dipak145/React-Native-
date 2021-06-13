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

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import StatusBarScreen from "../components/StatusBarScreen";

const CELL_COUNT = 4;

function Verification() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
            <AppText style={styles.heading}>Verification</AppText>
            <AppText style={styles.para}>
              we have sent a verification code to your email ID
            </AppText>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <View style={{ marginTop: 30, marginBottom: 30 }}>
              <AppText>Didn't get a code? Tap to resend</AppText>
            </View>

            <AppButton title="VERIFY" />
            <View style={{ display: "flex", flexDirection: "row" }}>
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
export default Verification;

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
    marginTop: 50,
  },
  tinyLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
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
  },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
