import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import EnglishScreen from "./screens/EnglishScreen";
import MathScreen from "./screens/MathScreen";
import Menu from "./screens/Menu";
import IrsScreen from "./screens/IrsScreen";
import Chemistry from "./screens/Chemistry";
import Biology from "./screens/Biology";
import Physics from "./screens/Physics";
import Account from "./screens/Account";
import Commerce from "./screens/Commerce";
import Economics from "./screens/Economics";
import AgricScreen from "./screens/Agric";
import ComputerScreen from "./screens/Computer";
import LiteratureScreen from "./screens/Literature";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarColor: "#13274F",
          headerStyle: {
            backgroundColor: "#72A0C1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="IRS" component={IrsScreen} />
        <Stack.Screen name="English" component={EnglishScreen} />
        <Stack.Screen name="Math" component={MathScreen} />
        <Stack.Screen name="Chemistry" component={Chemistry} />
        <Stack.Screen name="Physics" component={Physics} />
        <Stack.Screen name="Biology" component={Biology} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Commerce" component={Commerce} />
        <Stack.Screen name="Economics" component={Economics} />
        <Stack.Screen name="Agriculture" component={AgricScreen} />
        <Stack.Screen name="Computer" component={ComputerScreen} />
        <Stack.Screen name="Literature" component={LiteratureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
