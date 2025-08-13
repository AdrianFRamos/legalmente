import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, useColorScheme} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const lista = require('./dados/informacoes.json');
const imagens = {
  'splash': require('../assets/tema1.png'),
  'IdentidadeLegal': require('../assets/identidadeLegal.jpg'),
  'AtosInfracionais': require('../assets/atosInfracionais.jpg'),
  'ViolênciaIntrafamiliar': require('../assets/violênciaIntrafamiliar.jpg'),
  'Adoções': require('../assets/adoções.jpg'),
  'ViolênciaDoméstica': require('../assets/violênciaDoméstica.jpg'),
  'GuardaCompartilhada': require('../assets/guardaCompartilhada.jpg'),
  'DestituiçãoPoderFamiliar': require('../assets/destituiçãoPoderFamiliar.jpg'),
};
const HomeScreen = ({ navigation }) =>  {
  const colorScheme = useColorScheme();
  const backgroundColor = '#ffffff';
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 35 ,backgroundColor: '#ffffff' }}>
        <LinearGradient colors={['#8B0000', '#4A0011','#2C1810']} style={styles.headerScroll2}>
          <Image source={require('../assets/splash.png')} style={styles.icon} resizeMode="contain"/>
          <Text style={styles.textTemaAplicativo}>Direito da Familia
            
          </Text>
          <Text style={styles.text1}>Conhecimento jurídico especializado ao seu alcance</Text>
        </LinearGradient>
        {lista.ListaDados.length === 0 && (
          <Text style={styles.emptyText}>Nenhum dado disponível no momento</Text>
        )}
        {lista.ListaDados.map((item, index) => (
        <TouchableOpacity key={item.titulo} onPress={() => navigation.navigate(item.tela)}>
          <View style={styles.container}>
            <LinearGradient colors={['#8B0000', '#4A0011','#2C1810']} start={{ x: 0, y: 0 }}  end={{ x: 1, y: 0 }}  style={styles.card}>
              <View style={styles.header}>
                <Image source={imagens[item.imagemSecundari]} style={styles.postImage} />
                <View style={styles.headerText}>
                  <Text style={styles.temaPinciapl}>{item.temaPinciapl}</Text>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                </View>
              </View>
              <Text style={styles.assunto}>{item.textAssunto}</Text>
              <View style={styles.headerScroll3}>
                <Text style={styles.text2}>
                  Explore os principais conceitos, leis e aplicações do Direito de Família 
                </Text>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity> 
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 0,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  emptyText: {
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  card: {
    width: '100%',
    height: '94%',
    backgroundColor: '#222222',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    flexDirection: 'column',
  },
  temaPinciapl: {
    color: 'rgba(244, 178, 56, 1)',
    fontWeight: 'bold',
    marginTop: -10,
    fontSize: 25,
  },
  titulo: {
    marginTop: 5,
    color: '#bbb',
    fontSize: 20,
  },
  postImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#f2d974ff',
    borderWidth: 2,
    marginRight: 10,
  },
  assunto: {
    color: '#eee',
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 7,
  },
   headerScroll2: {
    alignItems: 'center',
    width: '110%',
    padding: 16,
    marginBottom: 20,
    marginLeft: -15,
  },
  textTemaAplicativo: {
    marginTop: 10,
    fontSize: 22,
    fontStyle: 'bold',
    color: 'rgba(244, 178, 56, 1)',
    marginBottom: 5,
  },
  text1: {
    fontSize: 10,
    color: '#f9dc67ff',
  },
  icon: {
    width: 55,
    height: 55,
    marginTop: 55,
  },
  temaAplicativo: {
    fontSize: 22,
    fontStyle: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  headerScroll3: {
    backgroundColor: '#521627ff',
    borderRadius: 12,
    shadowRadius: 4,
    alignItems: 'center',
    width: '99%',
    height: '30%',
    padding: 10,
    marginEnd:10,
    marginTop:10,
  },
  text2: {
    fontSize: 8,
    color: '#ccc',
    lineHeight: 20,
  },
});