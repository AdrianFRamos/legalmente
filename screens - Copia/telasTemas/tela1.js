import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import curiosities from "../../screens/dados/atoInfracional.json";

const Tela1Screen = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (currentIndex < curiosities.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setFinished(false);
    setStarted(false);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  // Tela inicial
  if (!started && !finished) {
    return (
      <LinearGradient
        colors={["#A67C7C", "#8B4A52", "#5D252A"]}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.homeTitle}>Curiosidades Sobre</Text>
          <Text style={styles.subTitle}>Atos Infracionais</Text>
        </View>
        <View style={styles.homeBody}>
          <Image
            source={require("../../assets/splash1.png")}
            style={styles.homeImg}
          />
          <Text style={styles.descriptionText}>
            Descubra fatos importantes sobre o direito juvenil e o ECA
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn1}
          onPress={() => setStarted(true)}
        >
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  // Tela final
  if (finished) {
    return (
      <LinearGradient
        colors={["#A67C7C", "#8B4A52", "#5D252A"]}
        style={styles.container}
      >
        <Text style={styles.title2}>Fim!</Text>
        <Text style={styles.question2}>Você viu todas as curiosidades!</Text>

        <TouchableOpacity style={styles.startBtn2} onPress={handleRestart}>
          <Text style={styles.btnText}>Recomeçar</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  // Tela das curiosidades
  const current = curiosities[currentIndex];
  return (
    <LinearGradient
      colors={["#A67C7C", "#8B4A52", "#5D252A"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title1}>{current.title}</Text>
        <Text style={styles.question1}>{current.question}</Text>

        {showAnswer && (
          <View style={styles.answerBox}>
            <Text style={styles.answer}>{current.answer}</Text>
            <Text style={styles.art}>{current.art}</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={() => setShowAnswer(!showAnswer)}
        >
          <Text style={styles.btnText}>
            {showAnswer ? "Esconder Resposta" : "Mostrar Resposta"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.btnText}>
            {currentIndex < curiosities.length - 1 ? "Próximo" : "Finalizar"}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
  },
  homeTitle: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  subTitle: {
    color: "#f5f5f5",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  homeBody: {
    alignItems: "center",
    paddingVertical: 20,
  },
  homeImg: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderRadius: 50,
    marginBottom: 50,
  },
  descriptionText: {
    fontSize: 22,
    textAlign: "center",
    color: "#fff",
  },
  startBtn1: {
    padding: 15,
    backgroundColor: "#8B4A52",
    borderRadius: 10,
    alignItems: "center",
  },
   startBtn2: {
    padding: 15,
    backgroundColor: "#95575efe",
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title1: {
    fontSize:30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#8B4A52",
    textAlign: "center",
  },
  title2: {
    fontSize:35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  question1: {
    fontSize: 18,
    marginBottom: 20,
    color: "#8B4A52",
    textAlign: "center",
  },
  question2: {
    fontSize: 18,
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  answerBox: {
    padding: 10,
    backgroundColor: "#f6e0bdf6",
    borderRadius: 8,
  },
  answer: {
    fontSize: 18,
    color: "#552125ff",
    marginBottom: 5,
  },
  art: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#552125ff",
  },
  toggleBtn: {
    marginTop: 15,
    padding: 12,
    backgroundColor: "#8B4A52",
    borderRadius: 8,
    alignItems: "center",
  },
  nextBtn: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#8b4a52d6",
    borderRadius: 8,
    alignItems: "center",
  },
});

export default Tela1Screen;
