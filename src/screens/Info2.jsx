import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


Info2 = () => {

    const navigation = useNavigation();

    const proximaTela = () =>{
        navigation.navigate("")
    }


    return (
        <View>
            <View>
                <Text>
                    Vamos personalizar sua experiência
                </Text>
                <Text>Para a recomendação ideal de água para você,
                     é necessário fornecer algumas informações básicas.</Text>
            <Text>
            Será usado apenas para calcular a quantidade recomendada de água.
            </Text>

            </View>
            <TouchableOpacity onPress={proximaTela()}><Text>Começar</Text></TouchableOpacity>
            <View>

            </View>
        </View>
    )
}

cons
export default Info2