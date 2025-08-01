import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tela3Screen= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela assunto 3</Text>
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

export default Tela3Screen;