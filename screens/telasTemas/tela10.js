import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const questions = [
  {
    question: "O poder familiar é o conjunto de direitos e deveres dos pais em relação aos filhos menores, como o dever de cuidar, educar, sustentar e proteger. Mas em casos graves, esse poder pode ser retirado judicialmente. Com base nisso, qual das situações abaixo justifica a destituição do poder familiar?",
    options: [
      "Apenas notificar os pais da ação",
      "Defender os interesses dos pais",
      "Atuar obrigatoriamente no processo, protegendo o interesse da criança"
    ],
    answer: "Atuar obrigatoriamente no processo, protegendo o interesse da criança",
    explanation: "A destituição do poder familiar é uma medida extrema e só ocorre quando há situações graves, como abandono, maus-tratos, violência física ou psicológica, ou comportamento contrário à moral e aos bons costumes (art. 1.638 do Código Civil e arts. 22-24 do ECA)."
  },
  {
    question: "Imagine que uma criança está sendo negligenciada pelos pais: não recebe alimentação adequada, não vai à escola e vive em situação de risco. Quem pode tomar providências legais para proteger a criança e, eventualmente, pedir a destituição do poder familiar?",
    options: ["Apenas um parente próximo", "Ministério Público ou qualquer pessoa com legitimo interesse", "Somente a própria criança"],
    answer: "Ministério Público ou qualquer pessoa com legitimo interesse",
    explanation: "O art. 155 do ECA autoriza que o Ministério Público ou qualquer pessoa com legítimo interesse proponham a ação judicial, sempre visando o melhor interesse da criança."
  },
  {
    question: "A destituição do poder familiar pode ser decidida de forma rápida e sem defesa pelos pais?",
    options: ["Sim, se for urgente", "Sim, desde que o juiz ouça o Conselho Tutelar", "Não, é preciso decisão judicial com direito à defesa e prova"],
    answer: "Não, é preciso decisão judicial com direito à defesa e prova",
    explanation: "Segundo o CPC (art. 693 e seguintes) e o ECA (arts. 23 e 24), a destituição depende de processo judicial, com ampla defesa e provas. Os pais devem ser ouvidos antes da decisão do juiz."
  },
  {
    question: "Quando o juiz decide pela destituição do poder familiar, o que acontece com os direitos dos pais sobre o filho?",
    options: ["Eles continuam podendo visitar e decidir sobre a educação da criança", "Eles perdem todos os direitos e deveres em relação ao filho", "Eles continuam responsáveis financeiramente, mas sem convivência"],
    answer: "Eles perdem todos os direitos e deveres em relação ao filho",
    explanation: "A destituição do poder familiar resulta na perda completa dos direitos e deveres parentais (ECA, art. 24 e CC, art. 1.638)."
  },
  {
    question: "Em casos de destituição do poder familiar, qual é o papel do Ministério Público?",
    options: ["Apenas notificar os pais da ação", "Defender os interesses dos pais", "Atuar obrigatoriamente no processo, protegendo o interesse da criança"],
    answer: "Atuar obrigatoriamente no processo, protegendo o interesse da criança",
    explanation: "O MP atua como fiscal da lei e defensor dos interesses da criança, sendo obrigatória sua participação (CPC, art. 178, II e ECA, art. 201, III)."
  },
];

const Tela10Screen = () => {
  const navigation = useNavigation();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setShowExplanation(true);

    const newAnswers = [...answers];
    newAnswers[currentIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  return (
    <LinearGradient
      colors={['#A67C7C', '#8B4A52', '#5D252A']}
      style={styles.container}
    >
      {!quizStarted ? (
        <View style={styles.startContainer}>
          <Text style={styles.mainTitle}>Teste seus conhecimentos!</Text>
          <Image source={require('../../assets/quiz/startImg.png')} style={styles.mainImg} />
          <Text style={styles.startTitle}>Responda ao quiz sobre a destituição do poder familiar.</Text>
          <TouchableOpacity style={styles.startButton} onPress={() => setQuizStarted(true)}>
            <Text style={styles.buttonText}>Começar Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : showResult ? (
        <View style={styles.resultContainer}>
          <Image source={require('../../assets/quiz/trophyImg.png')} style={styles.feedbackImg} />
          <Text style={styles.resultTitle}>Parabéns você concluiu o quiz!</Text>
          <Text style={styles.resultText}>
            Você acertou {answers.filter((a, i) => a === questions[i].answer).length} de {questions.length}
          </Text>
          <Text style={styles.resultPhrase}>
            Continue estudando para fortalecer seus conhecimentos em direito de família.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TELA10Final")}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.quizContainer}>
          {!showExplanation ? (
            <>
              <Text style={styles.question}>{questions[currentIndex].question}</Text>
              {questions[currentIndex].options.map((option, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.optionButton}
                  onPress={() => handleAnswer(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </>
          ) : (
            <View style={styles.explanationContainer}>
              {selectedAnswer === questions[currentIndex].answer ? (
                <>
                  <Image source={require("../../assets/quiz/correctImg.png")} style={styles.feedbackImg} />
                  <Text style={styles.feedbackText}>Correto</Text>
                </>
              ) : (
                <>
                  <Image source={require("../../assets/quiz/incorrectImg.png")} style={styles.feedbackImg} />
                  <Text style={styles.feedbackText}>Incorreto</Text>
                </>
              )}
              <Text style={styles.explanationText}>{questions[currentIndex].explanation}</Text>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Próxima</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 12 
  },
  startContainer: { 
    flex: 1, 
    justifyContent: "space-between", 
    paddingVertical: 60, 
    alignItems: "center" 
  },
  mainTitle: { 
    fontSize: 40, 
    marginTop: 60,
    textAlign: "center", 
    fontWeight: "bold", 
    color: "#FFFFFF" 
  },
  mainImg: { 
    width: 300, 
    height: 240, 
    resizeMode: "cover", 
    borderRadius: 12 
  },
  startTitle: { 
    fontSize: 24, 
    marginHorizontal: 20, 
    textAlign: "center", 
    color: "#FFFFFF" 
  },
  startButton: { 
    backgroundColor: "#FFFFFF", 
    padding: 18, 
    borderRadius: 20, 
    width: "80%", 
    marginBottom: 20 
  },
  quizContainer: { 
    flexGrow: 1, 
    justifyContent: "center" 
  },
  question: { 
    fontSize: 22, 
    fontWeight: "bold", 
    textAlign: "center", 
    color: "#FFFFFF", 
    marginBottom: 15 ,
    marginBottom: 50,
  },
  optionButton: { 
    backgroundColor: "#FFFFFF", 
    padding: 16, 
    borderRadius: 15, 
    marginVertical: 8 
  },
  optionText: { 
    color: "#5D252A", 
    fontSize: 20, 
    textAlign: "center",
    fontWeight: "bold", 
  },
  explanationContainer: { 
    marginTop: 20, 
    alignItems: "center"
  },
  explanationText: { 
    fontSize: 20, 
    textAlign: "center", 
    padding: 20, 
    color: "#562126ff",
    fontWeight: "bold", 
  },
  feedbackImg: { 
    resizeMode: "cover", 
    width: 200, 
    height: 200 
  },
  feedbackText: { 
    margin: 5, 
    fontSize: 45, 
    color: "#5D252A", 
    fontWeight: "bold" 
  },
  resultContainer: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  resultTitle: { 
    fontSize: 36, 
    fontWeight: "bold", 
    marginBottom: 10,
    textAlign: "center", 
    color: "#FFFFFF" 
  },
  resultPhrase: { 
    textAlign: "center", 
    fontSize: 22,
    padding: 5, 
    marginBottom: 15, 
    color: "#5D252A",
    fontWeight: "light", 
  },
  resultText: { 
    fontSize: 24, 
    margin: 20, 
    color: "#5D252A",
    fontWeight: "bold",  
  },
  button: { 
    backgroundColor: "#FFFFFF", 
    padding: 18, 
    borderRadius: 20, 
    marginVertical: 6, 
    width: "80%" 
  },
  buttonText: { 
    color: "#5D252A", 
    fontWeight: "bold", 
    fontSize: 20, 
    textAlign: "center" 
  },
});

export default Tela10Screen;
