import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import BiologyQuestion from "../components/data/bioData";

const Biology = () => {
  const [presentQuest, setPresentQuest] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(BiologyQuestion.length).fill(null)
  );

  const handleAnswers = (selectedAns) => {
    const answer = BiologyQuestion[presentQuest]?.answer;
    setSelectedAnswers((prevState) => {
      const updatedAnswers = [...prevState];
      updatedAnswers[presentQuest] = selectedAns;
      return updatedAnswers;
    });
    if (answer === selectedAns) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = presentQuest + 1;
    if (nextQuestion < BiologyQuestion.length) {
      setPresentQuest(nextQuestion);
      setTimeLeft(20);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setPresentQuest(0);
    setShowScore(false);
    setScore(0);
    setTimeLeft(20);
  };

  const prevQuestion = presentQuest - 1;
  const handlePrev = () => {
    setTimeLeft(20);
    setPresentQuest(prevQuestion);
  };

  const nextQuestion = presentQuest + 1;
  const handleNext = () => {
    setPresentQuest(nextQuestion);
    setTimeLeft(20);

    if (nextQuestion === BiologyQuestion.length) {
      setShowScore(true);
    }
  };

  const totalQuestions = BiologyQuestion.length;

  return (
    <View style={styles.container}>
      {showScore ? (
        <ScrollView>
          <View style={styles.score__container}>
            <Text style={styles.word}>You scored</Text>
            <Text style={styles.score__num}>{score}</Text>
            <Text style={styles.score__text}>Out of: {totalQuestions}</Text>
            <Button
              title="Take Quiz Again"
              onPress={handleRestart}
              buttonStyle={{
                backgroundColor: "#72A0C1",
                paddingHorizontal: 30,
              }}
            />
            <View style={styles.questionsContainer}>
              {BiologyQuestion.map((item, index) => (
                <View key={index} style={styles.questionItem}>
                  <Text style={styles.questionText}>{item.question}</Text>
                  <Text style={styles.answerText1}>
                    You selected: {selectedAnswers[index]}
                  </Text>
                  <Text style={styles.answerText}>Answer: {item.answer}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <View style={{ alignItems: "flex-end" }}>
            <Timer
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              handleNext={handleNext}
            />
          </View>
          <Text style={styles.screen__title}>BiologyQuestion Quiz</Text>
          <Text style={styles.questionNumber}>
            Question {presentQuest + 1} of {totalQuestions}
          </Text>
          <QuestionCard content={BiologyQuestion[presentQuest]?.question} />
          <View style={styles.quest__opts}>
            {BiologyQuestion[presentQuest]?.options.map((option) => {
              return (
                <TouchableOpacity
                  style={styles.opt__btn}
                  onPress={() => handleAnswers(option)}
                  key={option}
                >
                  <Text style={styles.opt__txt}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Button
              title="PREV"
              onPress={handlePrev}
              buttonStyle={styles.customButton}
              textStyle={styles.customButtonText}
              disabled={presentQuest === 0}
            />

            <Button
              title="NEXT"
              onPress={handleNext}
              buttonStyle={styles.customButton}
              textStyle={styles.customButtonText}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Biology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13274F",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  score__text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10%",
  },
  word: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  score__num: {
    fontSize: 80,
    color: "#fff",
  },
  score__container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  screen__title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  quest__container: {
    marginBottom: 40,
  },
  question: {
    fontSize: 20,
  },
  question1: {
    fontSize: 20,
    color: "white",
  },
  opt__btn: {
    backgroundColor: "#669bbc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  opt__txt: {
    color: "#fff",
    fontSize: 16,
  },
  questionNumber: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  // other
  questionsContainer: {
    marginTop: 40,
    width: "100%",
  },
  questionItem: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  answerText: {
    fontSize: 15,
    color: "#666",
  },
  answerText1: {
    fontSize: 15,
    color: "#669bbc",
  },
});
