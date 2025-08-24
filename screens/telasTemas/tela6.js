import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tela6Screen= () => {
  return (
      <LinearGradient  colors={['#A67C7C', '#8B4A52', '#5D252A']} style={styles.container}>
        <Text style={styles.text}>Tela assunto 6</Text>
      </LinearGradient>
    );
  };
      
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0,0,0,0.5)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
    },
  });
      
export default Tela6Screen;