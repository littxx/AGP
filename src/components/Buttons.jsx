import React from "react";
import { View,Text, Button, TouchableOpacity, StyleSheet}  from "react-native";


export default Button = (props) => {

    return(
        <Button styles={style.button} title="" onPress={(props)=>{props.name}}></Button>
    )
}


const style = StyleSheet.create({
    button:{
        backgroundColor:"white"
    }
})

