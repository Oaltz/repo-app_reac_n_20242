import { useStoreRootState } from "expo-router/build/global-state/router-store";
import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const produtos = [  
  {id: 1, nome: "Coca-Cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guaraná", preco: 5.5}
]

var contador = 0;
export default function Index() {
  let [contador, setContador]= useState(0);

  return (
    <View style={estilo.container}
    >
     {produtos.map((produto) => (
      <View key={produto.id} style={estilo.lista}>
        <Text>{produto.nome}</Text>
        <Text>{produto.preco}</Text>
      </View>
      ))
    }

    <Button title={contador.toString()} onPress={()=>{clicarBotao()}}> </Button>

    </View>
  );

  function clicarBotao(){
    setContador(contador+1);
  }
}

const estilo = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#bababa",
    },
    text: {
      color: "#FFFFFF",
      fontSize: 20,
    },
    lista: {
      display: "flex",
      flexDirection: "row",    
    },
  }
)