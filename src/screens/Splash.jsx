import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet } from "react-native";
import WaveView from "react-native-waveview";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  const navega = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navega.reset({
        index: 0,
        routes: [{ name: "Info" }],
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
       <Image source={require("../assets/Images/diario.png")} />
      <Animatable.View animation="fadeIn" style={styles.waveContainer}>
        <WaveView
          style={styles.wave}
          H={150}
          waveParams={[
            { A: 40, T: 320, fill: "#FFF" },
            { A: 30, T: 280, fill: "#BBDEFB" },
            { A: 20, T: 240, fill: "#90CAF9" },
          ]}
          animated={true}
        >
         
        </WaveView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1566B7",
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  wave: {
    height: 150,
  },
});

export default Splash;
