import React from 'react';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Top from "./src/screens/TopArtistAndTracks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * npm install @react-navigation/native
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

 */
const Stack = createStackNavigator();

export default function App()
{
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="movieList">
      <Stack.Screen name="WaveLogin" component={Login} />
      <Stack.Screen name="WaveHome" component={Home} />
      <Stack.Screen name="WaveTop" component={Top} />
    </Stack.Navigator>
  </NavigationContainer>
  ) 
  
  
  //<Login></Login>;
}