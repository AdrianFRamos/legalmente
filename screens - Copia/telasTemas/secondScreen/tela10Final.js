import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tela10Final({ navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.body}>
            <Text style={styles.title}>Você chegou ao fim!</Text>
            <Text style={styles.text}>
              A destituição do poder familiar é uma medida excepcional aplicada em situações graves, 
              como abandono, violência ou negligência.
            </Text>
            <Text style={styles.text}>
              Ela só pode ser decidida por um juiz, com participação do Ministério Público, sempre garantindo
              o direito de defesa.
            </Text>
            <Text style={styles.text}>
              O objetivo principal da lei é proteger o melhor interesse da criança ou adolescente.
            </Text>
          </View>
      
      <View style={styles.buttonBody}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace("TELA10")}>
          <Text style={styles.buttonText}>Refazer Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center",  
  },
  body:{
    justifyContent:"center",
    padding:20,
  },
  title: { 
    fontSize: 60,
    fontWeight:"bold",
    color:"#5D252A",
    marginBottom: 20 ,
    textAlign:"center",
    fontWeight: "bold", 
  },
  text:{
    color:"#5D252A",
      fontSize:23,
      textAlign:"center",
      padding:5,
    fontWeight: "light", 
  },
  buttonBody:{
   flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: { 
    backgroundColor: "#8B4A52",
    width:"48%",
    padding: 10, 
    marginVertical: 5, 
    borderRadius: 15,
    justifyContent: "center",
    textAlign: "center",
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 22,
    fontWeight:"bold",
    textAlign:"center",
    justifyContent: "center",
  },
});
