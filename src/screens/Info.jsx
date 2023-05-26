import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';




const Info = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const navigation = useNavigation();

  const proximaTela = () => {
    navigation.navigate('Info2')
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Bem vindo(a) ao seu diário de água!</Text>
          <Text style={styles.text}>Este aplicativo foi projetado para ajudá-lo a anotar a água consumida.</Text>
          <Text style={styles.text}>Caso você tenha salvo seus dados anteriormente, o aplicativo permite que você restaure seus dados.</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Conteúdo do Modal</Text>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text>Fechar Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={openModal()} style={styles.button}><Text>restaurar dados</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { proximaTela() }} style={styles.button}><Text>Primeiro acesso</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
})

export default Info;