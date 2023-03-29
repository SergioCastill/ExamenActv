import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";

const [carrera,SetCarrera]= useState("");
const c1 = [
    { key: "Sergio" ,colorEncontrada:"#fffafa" },
    { key: "Ángel",colorEncontrada:"#fffafa"},
    { key: "Alex" ,colorEncontrada:"#fffafa"},
    { key: "Leo" ,colorEncontrada:"#fffafa"},
    { key: "Rodrigo" ,colorEncontrada:"#fffafa"},
  ];

  const c2 = [
    { key: "José Luis" ,colorEncontrada:"#fffafa" },
    { key: "Rodolfo",colorEncontrada:"#fffafa"},
    { key: "Ándres" ,colorEncontrada:"#fffafa"},
    { key: "thorffin" ,colorEncontrada:"#fffafa"},
    { key: "Lucas" ,colorEncontrada:"#fffafa"},
  ];
  const App = () =>{


      <View style={styles.container}>
        <Text style={styles.TextoTitulo}>Lista de Alumnos</Text>
        <Text>Introduce la carrera a buscar</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={carrera}
          placeholder={""}
          value={carrera}
        />
        <FlatList style={styles.BordeLista}
      
        data={carrera}
        renderItem={({ item }) => <c1 nombre={item.key} colorEncontrada={item.colorEncontrada} />}
      />
      </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    TextoTitulo:{
        fontSize: 35,
        textAlign:"center",
        color:"purple"
    },
    textInput: {
        textAlign: "center",
        height:35,
        marginVertical:8,
        marginHorizontal:25,
        borderWidth:1
      },
  });
}
 export default App;