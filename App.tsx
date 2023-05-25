//libs do react
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import arquivos
import Splash from "./src/screens/Splash";
import Info from "./src/screens/Info";

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
      </Stack.Navigator>

    </NavigationContainer>

  )

}


export default App;