import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import forgotPassword from "./forgotPassword";
import LoginScreen from "./loginScreen";
import RegisterScreen from "./registerScreen";
import resetPassword from "./resetPassword";
import Verification from "./verification";

const Stack = createStackNavigator();

function AuthMainScreen(props) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
      <Stack.Screen name="ResetPassword" component={resetPassword} />
    </Stack.Navigator>
  );
}

export default AuthMainScreen;
