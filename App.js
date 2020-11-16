import React from 'react';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Top from "./src/screens/TopArtist";
import About from "./src/screens/AboutArtist"
import SearchArtist from "./src/screens/ArtistSearchResult";
import Collage from "./src/screens/Collage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {StatusBar} from 'react-native';
/**
 * npm install @react-navigation/native
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

 */
const Stack = createStackNavigator();

export default function App()
{
  return(
    <NavigationContainer>

      <StatusBar  barStyle="light-content" hidden={false} backgroundColor="#49274A" translucent={true} />
      
      <Stack.Navigator initialRouteName="movieList">
      <Stack.Screen name="WaveLogin" component={Login} />
      <Stack.Screen name="WaveHome" component={Home} />
      <Stack.Screen 
       options={{
        title: 'Tracks',
        headerStyle: 
        {
          elevation:0,
          backgroundColor: '#49274A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: 
        {
          textAlign:'right',
          fontWeight: 'bold',
        },
      }}
      name="WaveCollage" component={Collage} />

      <Stack.Screen 
      
        /*
         * Estas son las propiedades para la barra de navegacion encabezado
         */
      
      options={{
        title: 'Top artists',
        headerStyle: 
        {
          elevation:0,
          backgroundColor: '#49274A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: 
        {
          textAlign:'right',
          fontWeight: 'bold',
        },
      }}
      name="WaveTop" component={Top} />

      <Stack.Screen 
      options={{
        title: 'Information',
        headerStyle: 
        {
          elevation:0,
          backgroundColor: '#49274A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: 
        {
          textAlign:'right',
          fontWeight: 'bold',
        },
      }}
      name="WaveAbout" component={About}/>

<<<<<<< HEAD
      <Stack.Screen 
      options={{
        title: 'Artist results',
        headerStyle: 
        {
          elevation:0,
          backgroundColor: '#49274A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: 
        {
=======
      <Stack.Screen
      options={{
        title: 'Most listened',
        headerStyle:{
          backgroundColor: '#49274A',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
>>>>>>> 74b3754ae19b5f35cc9bb406792ddbecbf1b7d37
          textAlign:'right',
          fontWeight: 'bold',
        },
      }}
<<<<<<< HEAD
      name="SearchArtist" component={SearchArtist} />
=======
      name="MostListened" component={Home}/>
>>>>>>> 74b3754ae19b5f35cc9bb406792ddbecbf1b7d37
    </Stack.Navigator>


  </NavigationContainer>
  ) 
  //<Login></Login>;
}

