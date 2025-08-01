import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tela1Screen= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela assunto 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Tela1Screen;