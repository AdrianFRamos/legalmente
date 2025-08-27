import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const questionario = [
  {
    id: 1,
    pergunta: "Você mora junto com seu cônjuge?",
    opcoes: ["Sim", "Não", "Não mas pretendemos morar juntos"],
  },
  {
    id: 2,
    pergunta: "Seus familiares e amigos veem você e seu cônjuge como um casal?",
    opcoes: ["Sim, todos nos veem como casal", "Não, mantemos um relacionamento discreto"],
  },
  {
    id: 3,
    pergunta: "O seu relacionamento é contínuo sem longas pausas, ou idas e vindas constantes?",
    opcoes: ["Sim, é estável e contínuo", "Já tivemos algumas pausas e reconciliações"],
  },
  {
    id: 4,
    pergunta: "O casal tem planos futuros, como filhos e casamento?",
    opcoes: ["Sim, temos esses objetivos", "Não, no momento não temos esses objetivos"],
  },
  {
    id: 5,
    pergunta: "Vocês têm algum vínculo financeiro em comum?",
    opcoes: ["Sim", "Não, mantemos um relacionamento discreto"],
  },
  {
    id: 6,
    pergunta: "Algum de vocês é legalmente casado com outra pessoa?",
    opcoes: ["Casado legalmente, mas separado de fato", "Não"],
  },
];

const Tela3Screen = () => {
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [finalizado, setFinalizado] = useState(false);
  const [resultado, setResultado] = useState("");

  const perguntaAtual = questionario[indice];

  const handleResposta = (opcao) => {
    const novasRespostas = { ...respostas, [perguntaAtual.id]: opcao };
    setRespostas(novasRespostas);

    if (indice < questionario.length - 1) {
      setIndice(indice + 1);
    } else {
      analisarRespostas(novasRespostas);
      setFinalizado(true);
    }
  };

  const analisarRespostas = (respostas) => {
    let pontos = 0;
    let total = 6; // número de perguntas

    // 1 - Coabitação ou intenção de morar juntos
    if (respostas[1] === "Sim" || respostas[1] === "Não mas pretendemos morar juntos") pontos++;

    // 2 - Reconhecimento social
    if (respostas[2] === "Sim, todos nos veem como casal") pontos++;

    // 3 - Estabilidade
    if (respostas[3] === "Sim, é estável e contínuo") pontos++;

    // 4 - Planos futuros
    if (respostas[4] === "Sim, temos esses objetivos") pontos++;

    // 5 - Vínculo financeiro
    if (respostas[5] === "Sim") pontos++;

    // 6 - Impedimento legal
    if (respostas[6] === "Não") pontos++;

    // Análise final com base nos pontos
    if (pontos === total) {
      setResultado(
        "✅ União Estável Reconhecida\n\nCom base nas respostas, todos os requisitos legais foram atendidos: coabitação ou intenção de vida em comum, reconhecimento social, estabilidade do relacionamento, planos familiares, vínculo financeiro e ausência de impedimentos legais.\n\n" +
        "O relacionamento pode ser formalizado em cartório, garantindo plena segurança jurídica e direitos previstos no Código Civil."
      );
    } else if (pontos >= 4) {
      setResultado(
        "📌 União Estável em Potencial\n\nO casal já atende a grande parte dos requisitos legais. Ainda que alguns pontos como vínculos financeiros ou planos futuros possam ser fortalecidos, já existe base suficiente para caracterizar união estável.\n\n" +
        "É recomendável avaliar a formalização em cartório e reforçar os aspectos pendentes para maior segurança jurídica."
      );
    } else if (pontos >= 2) {
      setResultado(
        "⚠️ Relacionamento com Elementos de União Estável\n\nAlguns requisitos já estão presentes, como afeto e reconhecimento parcial, mas ainda faltam aspectos importantes como estabilidade contínua, planos de família ou coabitação efetiva.\n\n" +
        "Com ajustes e amadurecimento, poderá ser caracterizado futuramente como união estável."
      );
    } else {
      setResultado(
        "❌ Ausência de Requisitos para União Estável\n\nCom base nas respostas, os principais elementos legais não foram atendidos. A relação pode existir no campo afetivo, mas juridicamente não é considerada união estável no momento.\n\n" +
        "É necessário amadurecer pontos como convivência, reconhecimento social e planos de vida em comum para que seja possível o reconhecimento futuro."
      );
    }
  };

  return (
    <LinearGradient
      colors={['#A67C7C', '#8B4A52', '#5D252A']}
      style={styles.container}
    >
      {!finalizado ? (
        <View style={styles.card}>
          <Image source={require('../../assets/guiaCasamento/guiaCasamento.png')} style={styles.imagem1} resizeMode="cover"/>
          <Text style={styles.pergunta}>{perguntaAtual.pergunta}</Text>
          <FlatList
            data={perguntaAtual.opcoes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.botao}
                onPress={() => handleResposta(item)}
              >
                <Text style={styles.textoBotao}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.progresso}>
            Pergunta {indice + 1} de {questionario.length}
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.resultadoCard}>
          <Image source={require('../../assets/guiaCasamento/imagesFinalGuiaCasamento.png')} style={styles.imagem2} resizeMode="cover"/>
          <Text style={styles.resultadoTexto}>{resultado}</Text>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 16,
    color: '#5D252A',
    fontWeight: '600',
  },
  progresso: {
    marginTop: 15,
    color: '#fff',
    textAlign: 'center',
  },
  resultadoCard: {
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  resultadoTexto: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'justify',
    lineHeight: 22,
    margin: 10,
    marginTop: 30,
  },
  imagem1: {
    width: 250,
    height:250,
    marginTop: 10,
    borderRadius: 200,
    marginBottom: 20,
    margin: 25,
    alignSelf: 'center',
  },
  imagem2: {
    width: 250,
    height:250,
    marginTop: 70,
    borderRadius:10,
    marginBottom: 20,
    margin: 25,
    alignSelf: 'center',
  },
});

export default Tela3Screen;
