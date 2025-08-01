import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

const lista = require('./dados/informacoes.json');

const HomeScreen = ({ navigation }) =>  {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {lista.ListaDados.length === 0 && (
          <Text style={styles.emptyText}>Nenhum dado disponível no momento</Text>
        )}
        {lista.ListaDados.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* Cabeçalho */}
            <View style={styles.header}>
              <Image source={{ uri: item.imagemPrinvial }} style={styles.avatar} />
              <View style={styles.headerText}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.titulo}>{item.titulo}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(item.tela)}>
              {/* Imagem */}
              <Image source={{ uri: item.imagemSecundari }} style={styles.postImage} />
              {/* Texto assunto */}
              <Text style={styles.assunto}>{item.textAssunto}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 40,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  emptyText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  headerText: {
    flexDirection: 'column',
  },
  nome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titulo: {
    color: '#bbb',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  assunto: {
    color: '#eee',
    fontSize: 15,
    lineHeight: 20,
  },
});