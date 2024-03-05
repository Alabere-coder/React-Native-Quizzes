import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Vibration } from "react-native";

const Timer = ({ timeLeft, setTimeLeft, handleNext }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      // Vibration.vibrate();
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      setIsBlinking(timeLeft - 1 < 11);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <View style={styles.timer__container}>
      <Text style={[styles.timer, isBlinking && styles.blinkingText]}>
        {`${timeLeft}`}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    color: "#fff",
    fontSize: 25,
  },
  blinkingText: {
    color: "red",
    fontWeight: "bold",
  },
  timer__container: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#669bbc",
    borderRadius: 1000,
    height: 45,
    width: 45,
  },
});
