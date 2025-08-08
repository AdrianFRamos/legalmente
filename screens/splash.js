import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2500); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <View style={styles.circleBackgroundInner}>
            <LinearGradient colors={['#8B0000', '#4A0011', '#2C1810']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.circleBackground}>
              <Image source={require('../assets/splash.png')} style={styles.icon} resizeMode="contain"/>
            </LinearGradient>
          </View>
        </View>
        <Text style={styles.titulo}>Direito de Família</Text>
        <Text style={styles.descricao}>
          Explore os fundamentos jurídicos e aplicações práticas do Direito de Família
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
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
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#8B0000',
    borderWidth: 2,
    borderColor: '#cdcd586e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBackground: {
    width: 130,
    height: 130,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  icon: {
    width: 55,
    height: 55,
    marginTop: -50,
  },
  titulo: {
    fontSize: 25,
    color: 'rgba(244, 178, 56, 1)',
    marginBottom: 10,
    fontWeight: '500',
  },
  descricao: {
    fontSize: 14,
    color: '#eee',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
});
