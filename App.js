import React from 'react';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Top from "./src/screens/TopArtistAndTracks";
import About from "./src/screens/AboutArtist"
import SearchArtist from "./src/screens/ArtistSearchResult";

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
      
        /*
         * Estas son las propiedades para la barra de navegacion encabezado
         */
      
      options={{
        title: 'Top artist',
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

      <Stack.Screen 
      options={{
        title: 'Search artist',
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
      name="SearchArtist" component={SearchArtist} />
    </Stack.Navigator>
  </NavigationContainer>
  ) 
  //<Login></Login>;
}

