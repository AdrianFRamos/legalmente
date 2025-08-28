import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const faq = [
  {
    pergunta: 'Quem pode adotar uma criança no Brasil?',
    resposta:
      '• Maiores de 18 anos, independentemente do estado civil (casados, solteiros, união estável etc.).\n' +
      '• Diferença mínima de 16 anos entre adotante e adotado.\n' +
      '• Estrangeiros também podem adotar, seguindo regras específicas.'
  },
  {
    pergunta: 'Quais os documentos necessários para iniciar o processo de adoção?',
    resposta:
      '• RG e CPF;\n' +
      '• Comprovante de residência;\n' +
      '• Comprovante de renda;\n' +
      '• Atestado de sanidade física e mental;\n' +
      '• Certidões negativas criminais;\n' +
      '• Certidão de antecedentes cíveis;\n' +
      '• Fotografias;\n' +
      '• Outros exigidos pelo Juizado da Infância e Juventude local.'
  },
  {
    pergunta: 'Quanto tempo demora para conseguir adotar?',
    resposta:
      '• Varia bastante. Após a habilitação, o tempo depende da compatibilidade com a criança.\n' +
      '• Pode demorar meses ou anos.\n' +
      '• Crianças mais velhas, grupos de irmãos ou com condições de saúde específicas costumam ter adoção mais rápida.'
  },
  {
    pergunta: 'O que é preciso fazer para se habilitar à adoção?',
    resposta:
      '• Participar de um curso preparatório obrigatório;\n' +
      '• Submeter-se à avaliação psicossocial;\n' +
      '• Apresentar os documentos e passar por entrevistas.'
  },
  {
    pergunta: 'Posso escolher o perfil da criança?',
    resposta:
      '• Sim, é possível indicar idade, sexo, cor/etnia, se aceita irmãos, doenças etc.\n' +
      '• Quanto mais restrito o perfil, mais demorada tende a ser a adoção.'
  },
  {
    pergunta: 'Posso adotar uma criança específica que já conheço?',
    resposta:
      '• Sim, é possível, mas precisa passar por todo o processo legal.\n' +
      '• O Judiciário avaliará se há vínculo afetivo e o melhor interesse da criança.'
  },
  {
    pergunta: 'É possível “devolver” uma criança adotada?',
    resposta:
      '• Chamada juridicamente de “desconstituição da adoção” e é gravíssima.\n' +
      '• Só pode ocorrer em situações excepcionais e será analisada judicialmente.\n' +
      '• Pode gerar consequências legais.'
  },
  {
    pergunta: 'Posso adotar fora da fila, direto com a mãe biológica?',
    resposta:
      '• Não. Isso pode configurar adoção à brasileira (adoção irregular), que é crime.\n' +
      '• Toda adoção precisa de autorização judicial.'
  },
  {
    pergunta: 'A criança precisa concordar com a adoção?',
    resposta:
      '• Sim, se tiver mais de 12 anos, é necessário consentimento expresso da criança.'
  },
  {
    pergunta: 'Casais homoafetivos podem adotar?',
    resposta:
      '• Sim. O STF já reconheceu a igualdade de direitos na adoção para casais homoafetivos.'
  },
  {
    pergunta: 'Posso manter contato com a família biológica após a adoção?',
    resposta:
      '• Em geral, não. A adoção plena rompe os vínculos jurídicos com a família biológica.\n' +
      '• Casos de adoção aberta são raros e requerem autorização judicial específica.'
  },
  {
    pergunta: 'Existe diferença entre guarda, tutela e adoção?',
    resposta:
      '• Guarda: direitos provisórios, como para fins escolares ou médicos.\n' +
      '• Tutela: quando os pais são falecidos ou destituídos do poder familiar.\n' +
      '• Adoção: definitiva e gera vínculo jurídico como filho biológico.'
  }
];

const Tela2Screen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <LinearGradient
      colors={['#A67C7C', '#8B4A52', '#5D252A']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Adoção no Brasil - FAQ</Text>
        <Image source={require('../../assets/adoçãoImage.png')} style={styles.  imagem1} resizeMode='contain'/>
        {faq.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => toggleAnswer(index)}>
              <Text style={styles.question}>{item.pergunta}</Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text style={styles.answer}>{item.resposta}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  scrollContainer: { 
    padding: 16 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    textAlign: 'center',
    marginTop: 40, 
  },
  card: { 
    backgroundColor: 'rgba(255, 255, 255, 0.26)', 
    padding: 14, 
    borderRadius: 10, 
    marginBottom: 12 
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5 
  },
  answer: { 
    fontSize: 14, 
    color: '#ffffffde', 
    lineHeight: 20, 
    marginTop: 5 
  },
  imagem1: {
    width: 250,
    height:230,
    alignSelf: 'center',
  },
});

export default Tela2Screen;
