import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import AppStatusBar from "../components/AppStatusBar";
import QRScreen from "./QRScreen";
import ProfileShop from "./profileShop";
import RankingScreen from "./RankingScreen";
import HomeScreenCard from "../components/HomeScreenCard";
import { createStackNavigator } from "@react-navigation/stack";
import ItemDetailScreen from "../components/ItemDetailScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          console.log(color);
          switch (route.name) {
            case "HomeScreen": {
              return <Ionicons name="grid-outline" size={24} color={color} />;
            }
            case "QR Code": {
              return (
                <MaterialCommunityIcons
                  name="image-filter-center-focus-strong-outline"
                  size={24}
                  color={color}
                />
              );
            }
            case "Ranking": {
              return <AntDesign name="Trophy" size={24} color={color} />;
            }
            case "Cart": {
              return <AntDesign name="shoppingcart" size={24} color={color} />;
            }
          }
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#01011f",
        },
        activeTintColor: "#d93069",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="QR Code"
        component={QRScreen}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProfileShop}
        options={{
          title: "",
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MainScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        options={{
          headerShown: false,
        }}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DetailScreen"
        component={ItemDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default MainScreen;
