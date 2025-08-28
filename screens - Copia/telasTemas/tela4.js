import React, { useState } from "react";
import { View, Text, TouchableOpacity,Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const questions = [
  {
    question: "1. A principal finalidade das medidas protetivas aplicadas pelo juiz, de acordo com o ECA, é a punição dos agressores.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. A finalidade principal das medidas protetivas é a proteção e a garantia dos direitos da criança ou adolescente, e não a punição do agressor, que é tratada em outras esferas (civil e criminal).",
  },
  {
    question: "2.O afastamento do agressor do lar é uma medida protetiva que pode ser aplicada em casos de violência psicológica, mesmo que não haja agressão física.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "VERDADEIRO",
    explanation: "VERDADEIRO. A violência psicológica é uma forma de violência intrafamiliar, e o afastamento do agressor é uma medida essencial para garantir a segurança emocional e psicológica da vítima.",
  },
  {
    question: "3. O simples estabelecimento de regras e horários para um filho é considerado violência psicológica, de acordo com o Direito de Família.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. O estabelecimento de regras e horários é uma prática pedagógica e faz parte do dever de educação dos pais. A violência psicológica é caracterizada por comportamentos que causam dano emocional, como humilhação e ameaças constantes.",
  },
  {
    question: "4. A violência intrafamiliar ocorre apenas entre cônjuges ou companheiros.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. A violência intrafamiliar envolve qualquer relação de convivência familiar ou afetiva, incluindo pais e filhos, irmãos, avós, tutores, etc. (Lei Maria da Penha, art. 5º; CF/88, art. 226). Não se limita a relacionamento amoroso, mas a todo e qualquer vínculo familiar.",
  },
  {
    question: "5. A Lei Maria da Penha pode ser aplicada mesmo que a vítima e o agressor não morem mais juntos. ",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "VERDADEIRO",
    explanation: "VERDADEIRO. A convivência sob o mesmo teto não é requisito para aplicação da LMP. Basta a existência de relação doméstica, familiar ou de afeto, mesmo que encerrada. (LMP, art. 5º, parágrafo único). A violência pode continuar mesmo após o término da relação.",
  },
  {
    question: "6. Ofensas verbais entre pais e filhos, quando recorrentes e humilhantes, podem ser consideradas violência psicológica. ",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "VERDADEIRO",
    explanation: "VERDADEIRO. A violência psicológica é amplamente reconhecida como forma de violência doméstica. (LMP, art. 7º, II; ECA, art. 5º). Desvalorização, xingamentos, chantagens emocionais... tudo entra na conta.",
  },
  {
    question: "7.. A alienação parental não configura forma de violência intrafamiliar, pois trata-se apenas de disputa de guarda. ",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. A alienação parental é forma de violência psicológica e pode causar danos irreversíveis à criança ou adolescente. (Lei 12.318/10; CF/88, art. 227). Não é só briga de guarda. É manipulação e abuso emocional.",
  },
  {
    question: "8. Patrícia vive com um companheiro agressivo há anos, mas não quer denunciá-lo por medo de perder a guarda dos filhos ou de não ter para onde ir. Por isso, acredita que a melhor saída é aguentar e tentar manter a paz em casa. ",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. O medo de denunciar é comum, mas existem redes de apoio que protegem a mulher e os filhos. A Justiça não tira a guarda de quem é vítima, e há abrigos, auxílios e medidas que garantem a proteção e os direitos da mulher e dos filhos.",
  },
  {
    question: "9. A violência patrimonial contra idosos, como o uso indevido da aposentadoria, é caracterizada como infração penal.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer:  "VERDADEIRO",
    explanation: "VERDADEIRO. Estatuto do Idoso, art. 102. Além disso, pode configurar apropriação indébita, estelionato e até maus-tratos. Explorar financeiramente o idoso é crime, infelizmente.",
  },
  {
    question: "10.Para que o Ministério Público atue nos casos de violência familiar, é necessário que a vítima formalize a denúncia.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. O MP pode agir de ofício em situações de violência familiar. Não depende da vontade da vítima em muitos casos. (LMP, art. 25 e 26; CPP, art. 129, I, II e VIII da CF/88). Violência doméstica é questão pública. Não é assunto (de dentro de casa).",
  },
  {
    question: "11. O ciclo da violência doméstica é composto apenas por agressões físicas recorrentes. ",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. O ciclo da violência envolve três fases: tensão, agressão e lua de mel. Inclui agressões psicológicas, patrimoniais, morais, sexuais e físicas. (LMP, art. 7º). A agressão física é só a ponta do iceberg.",
  },
  {
    question: "12. Se uma criança vive em uma casa onde o pai agride a mãe, mas ela mesma nunca é agredida, não há o que a Justiça possa fazer, já que ela não é vítima direta.",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer:  "VERDADEIRO",
    explanation: "VERDADEIRO. A criança que convive com violência é considerada vítima indireta. Isso pode afetar seu desenvolvimento emocional e psicológico. O Conselho Tutelar ou o juiz da vara da infância pode intervir para proteger a criança.",
  },
  {
    question: "13.Homens também podem ser vítimas de violência doméstica, e a Lei Maria da Penha pode protegê-los nesses casos. ",
    type: "VERDADEIRO OU FALSO?",
    correctAnswer: "FALSO",
    explanation: "FALSO. A LMP é voltada especificamente à proteção da mulher em razão de gênero (LMP, art. 1º). Homens vítimas devem buscar amparo geral no CPP e Código Civil. Homem pode ser vítima? Sim. Mas a Lei Maria da Penha não se aplica a ele.",
  },
];

const Tela4Screen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const question = questions[currentQuestion];

  return (
    <LinearGradient
      colors={['#A67C7C', '#8B4A52', '#5D252A']}
      style={styles.container}
    >
      {currentQuestion < questions.length ? (
        <View style={styles.card}>
          {!showExplanation && (
            <Image source={require('../../assets/verdadeOfalso1.png')} style={styles.imagem1} resizeMode="cover"/>
          )}
          <Text style={styles.question}>{question.question}</Text>
          {!showExplanation ? (
            <View>
              <TouchableOpacity style={styles.button} onPress={() => handleAnswer("VERDADEIRO")}>
                <Text style={styles.buttonText2}>Verdadeiro</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.button} onPress={() => handleAnswer("FALSO")} >
                <Text style={styles.buttonText3}>Falso</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text
                style={[
                  styles.result,
                  selectedAnswer === question.correctAnswer
                    ? styles.correct
                    : styles.incorrect,
                ]}
              >
                {selectedAnswer === question.correctAnswer
                  ? "✅ Resposta Correta!"
                  : "❌ Resposta Incorreta!"}
              </Text>
              <Text style={styles.explanation}>{question.explanation}</Text>
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.buttonText1}>Continuar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
       <View style={{ alignItems: "center" }}>
          <Text style={styles.finalText}>
            🎉 Parabéns! Você concluiu todas as perguntas.
          </Text>
          <TouchableOpacity  style={styles.homeButton} onPress={() => navigation.navigate("Home")} >
            <Text style={styles.buttonText1}>Voltar Menu Principal</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    padding: 20,
    width: "100%",
  },
  question: {
    fontSize: 23,
    color: "#FFFFFF",
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#faf7f0e2",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText1: {
    color: "#000000ff",
    fontSize: 23,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#18f504ff",
    fontSize: 23,
    fontWeight: "bold",
  },
  buttonText3: {
    color: "#fb0000ff",
    fontSize: 23,
    fontWeight: "bold",
  },
  result: {
    fontSize: 22,
    marginVertical: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  correct: {
    color: "lightgreen",
  },
  incorrect: {
    color: "red",
  },
  explanation: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 10,
  },
  nextButton: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  finalText: {
    fontSize: 25,
    marginVertical: 45,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  type: {
    fontSize: 22,
    color: "#ccc",
    fontStyle: "italic",
    marginBottom: 15,
    textAlign: "center"
  },
  homeButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  imagem1: {
    width: 250,
    height:250,
    marginTop: -10,
    borderRadius: 200,
    marginBottom: 20,
    margin: 25,
    alignSelf: 'center',
  },

});

export default Tela4Screen;
