//libs do react
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import arquivos
import Splash from "./src/screens/Splash";
import Info from "./src/screens/Info";
import Info2 from "./src/screens/Info2";

//Configure das Stacks
const resume = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'white',
  },
  cardShadowEnabled: false,
  gestureEnabled: false,
}

const Stack = createStackNavigator()

const App = () =>{

  

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={resume} >
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Info" component={Info}/>
        <Stack.Screen name="Info2" component={Info2}/>

      </Stack.Navigator>

    </NavigationContainer>

  )

}


export default App;