import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Svg,
  Path,
} from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/quizz.png")}
        style={{ height: 300, width: "100%" }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.btn__txt}>Let's get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13274F",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    paddingVertical: 15,
    width: "90%",
    backgroundColor: "#f08080",
    borderRadius: 15,
  },
  btn__txt: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
