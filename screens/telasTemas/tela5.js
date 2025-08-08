import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tela5Screen= () => {
return (
    <LinearGradient  colors={['#2C1810','#4A0011','#8B0000','#8B0000','#8B0000', '#4A0011','#2C1810' ]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <Text style={styles.text}>Tela assunto 5</Text>
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
    
export default Tela5Screen;