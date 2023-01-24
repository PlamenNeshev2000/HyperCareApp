import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./src/components/Navbar";
// import 'localstorage-polyfill';


// const StackApp = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return <Navbar />
  ;
  //To start the app on a phone use
  // npx expo start --tunnel 
}
