import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Temp from "./app/components/temp";
import LoginScreen from "./app/screens/loginScreen";
import RegisterScreen from "./app/screens/registerScreen";
import Verification from "./app/screens/verification";
import ForgetPassword from "./app/screens/forgotPassword";
import ResetPassword from "./app/screens/resetPassword";
import HomeScreen from "./app/screens/HomeScreen";
import ProfileShop from "./app/screens/profileShop";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Verification /> */}
      {/* <ForgetPassword /> */}
      {/* <ResetPassword /> */}
      <ProfileShop />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
