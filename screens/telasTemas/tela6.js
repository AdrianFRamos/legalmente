import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import questionarioViolencia from "../dados/questionarioViolencia.json";
const imagens = {
  'ViolenciaCrianca': require('../../assets/violencia/violenciaCrianca.png'),
  'ViolenciaHomem': require('../../assets/violencia/violenciaHomem.png'),
  'ViolenciaIdoso': require('../../assets/violencia/violenciaIdoso.png'),
  'ViolenciaMulher': require('../../assets/violencia/violenciaMulher.png'),
};

const Tela6Screen = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState(null);
  const [perguntaIndex, setPerguntaIndex] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);

  const escolherOpcao = (resposta) => {
    setRespostas({ ...respostas, [perguntaIndex]: resposta });

    if (perguntaIndex + 1 < questionarioViolencia[tipoSelecionado].perguntas.length) {
      setPerguntaIndex(perguntaIndex + 1);
    } else {
      finalizarQuestionario();
    }
  };

  const finalizarQuestionario = () => {
    const quiz = questionarioViolencia[tipoSelecionado];
    const respostasArray = Object.values(respostas);

    let contaA = 0, contaB = 0, contaC = 0, alertaCritico = false;

    respostasArray.forEach((resp, idx) => {
      if (resp.startsWith("A")) contaA++;
      if (resp.startsWith("B")) contaB++;
      if (resp.startsWith("C")) contaC++;

      if (quiz.criticas.includes(idx + 1) && resp.startsWith("A")) {
        alertaCritico = true;
      }
    });

    let interpretacao;
    if (alertaCritico) interpretacao = quiz.interpretacao.critica;
    else if (contaA > contaB && contaA > contaC) interpretacao = quiz.interpretacao.A;
    else if (contaB > contaA && contaB > contaC) interpretacao = quiz.interpretacao.B;
    else interpretacao = quiz.interpretacao.C;

    setResultado(interpretacao);
  };

  if (!tipoSelecionado) {
    return (
      <LinearGradient colors={["#A67C7C", "#8B4A52", "#5D252A"]} style={styles.container}>
        <Text style={styles.title}>Escolha o Tipo de Questionário</Text>
        <Image source={require('../../assets/violencia/violenciaGeral.png')} style={styles.imagem1} resizeMode="cover"/>
        {Object.keys(questionarioViolencia).map((tipo) => (
          <TouchableOpacity key={tipo} style={styles.button} onPress={() => setTipoSelecionado(tipo)}>
            <Text style={styles.buttonText}>{questionarioViolencia[tipo].titulo}</Text>
          </TouchableOpacity>
        ))}
      </LinearGradient>
    );
  }

  if (!resultado) {
    const quiz = questionarioViolencia[tipoSelecionado];
    const perguntaAtual = quiz.perguntas[perguntaIndex];

    return (
      <LinearGradient colors={["#A67C7C", "#8B4A52", "#5D252A"]} style={styles.container}>
        <Text style={styles.title}>{quiz.titulo}</Text>
        <Image source={imagens[quiz.imagemTema]} style={styles.imagem1} resizeMode="cover"/>
        <View style={styles.perguntaBox}>
          <Text style={styles.pergunta}>{perguntaIndex + 1}. {perguntaAtual.texto}</Text>
          {perguntaAtual.opcoes.map((opcao, i) => (
            <TouchableOpacity key={i} style={styles.opcaoButton} onPress={() => escolherOpcao(opcao)}>
              <Text style={styles.opcaoTexto}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={["#A67C7C", "#8B4A52", "#5D252A"]} style={styles.container}>
      <Text style={styles.title}>📊 Resultado</Text>
      <View style={styles.resultadoBox}>
        <Text style={styles.resultadoTexto}>{resultado}</Text>
      </View>
      <Text style={styles.contato}>
        📞 Contato do Serviço Social{"\n"}
        CEAV{"\n"}
        (48) 3287-2637{"\n"}
        (48) 3287-2635
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => { setTipoSelecionado(null); setPerguntaIndex(0); setRespostas({}); setResultado(null); }}>
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16, 
    justifyContent: "center" 
  },
  title: { 
    color: "#fff", 
    fontSize: 32, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: "#fff", 
    padding: 12, 
    borderRadius: 10, 
    marginVertical: 5, 
    alignItems: "center" 
  },
  buttonText: { 
    color: "#5D252A", 
    fontWeight: "bold" ,
    fontSize: 18,
  },
  perguntaBox: { 
    marginBottom: 20, 
    padding: 10, 
    backgroundColor: "rgba(255,255,255,0.1)", 
    borderRadius: 10 
  },
  pergunta: { 
    fontSize: 23, 
    color: "#fff", 
    marginBottom: 15 
  },
  opcaoButton: { 
    padding: 10, 
    marginVertical: 5, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: "#fff" 
  },
  opcaoTexto: { 
    color: "#fff", 
    fontSize: 18 
  },
  resultadoBox: { 
    padding: 15, 
    backgroundColor: "rgba(0,0,0,0.5)", 
    borderRadius: 10,
    marginBottom: 20 
  },
  resultadoTexto: { 
    color: "#fff", 
    fontSize: 20, 
    marginBottom: 10 
  },
  contato: { 
    color: "#ffdddd", 
    margin: 15, 
    fontSize: 20, 
    textAlign: "center" 
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

export default Tela6Screen;
