import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const QuestionCard = ({ content }) => {
  return (
    <View style={styles.quest__container}>
      <Text style={styles.question}>{content}</Text>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  quest__container: {
    backgroundColor: "#2E5090",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    height: 170,
    width: 300,
    // borderWidth: 4,
    // borderColor: "#2E5090",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  question: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
