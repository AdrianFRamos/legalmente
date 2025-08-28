import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

export default function SplashScreen({ navigation }) {
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Home');
      }, 2500); // 2,5 segundos

      return () => clearTimeout(timer); // limpa o timer ao sair da tela
    }, [navigation])
  );

  return (
    <LinearGradient colors={['#A67C7C', '#8B4A52', '#5D252A']} style={styles.container}>
      <View style={styles.iconWrapper}>
        <View style={styles.circleBackgroundInner}>
          <Image source={require('../assets/splash1.png')} style={styles.icon} resizeMode="cover"/>
        </View>
      </View>
      <Text style={styles.titulo}>Direito de Família</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  circleBackgroundInner: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
