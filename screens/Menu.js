import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Card from "../components/Card";

const Menu = ({ navigation }) => {
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.pageTitle}>
        <Text style={styles.sectionTitle}>
          Select From Category to Get Started
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", gap: 16, marginTop: 16 }}>
          <TouchableOpacity onPress={() => navigation.navigate("English")}>
            <Card
              title="English"
              customStyle={{ backgroundColor: "#2E5090" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Math")}>
            <Card title="Mathematics" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Agriculture")}>
            <Card title="Agriculture" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Chemistry")}>
            <Card
              title="Chemistry"
              customStyle={{ backgroundColor: "#2E5090" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Physics")}>
            <Card
              title="Physics"
              customStyle={{ backgroundColor: "#2E5090" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Biology")}>
            <Card title="Biology" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <Card title="Account" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Commerce")}>
            <Card
              title="Commerce"
              customStyle={{ backgroundColor: "#2E5090" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Computer")}>
            <Card
              title="Computer"
              customStyle={{ backgroundColor: "#2E5090" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Literature")}>
            <Card title="Literature" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Economics")}>
            <Card
              title="Economics"
              customStyle={{ backgroundColor: "#2E5090" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("IRS")}>
            <Card title="Islamic Studies" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#13274F",
  },
  container: {
    flex: 2,
    backgroundColor: "#13274F",
    alignItems: "center",
    justifyContent: "center",
  },

  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "#a9d6e5",
    textAlign: "center",
    lineHeight: 50,
  },
  pageTitle: {
    backgroundColor: "",
  },
});
