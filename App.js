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
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./app/screens/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ItemDetailScreen from "./app/components/ItemDetailScreen";

const isUserLogged = true;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {isUserLogged ? (
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            options={{
              headerShown: false,
            }}
            component={MainScreen}
          />
          <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
        </Stack.Navigator>
      ) : (
        <View style={styles.container}>
          {/* <RegisterScreen /> */}
          {/* <LoginScreen /> */}
          {/* <Verification /> */}
          {/* <ForgetPassword /> */}
          {/* <ResetPassword /> */}
          <ProfileShop />
          <StatusBar style="auto" />
        </View>
      )}
    </NavigationContainer>
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
