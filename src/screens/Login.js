import React, { useEffect, useState } from 'react';
import { StyleSheet,View,Text,Dimensions, Image} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
//import Constants from 'expo-Constants';
import { accessUrl } from '../../enviroment';
import {Button, Container, Input, Item, Icon} from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from "react-native-gesture-handler";


//Dimensiones de pantalla
const {width, height} = Dimensions.get("window");
/*
!Posiblemente asi obtenga el hash
import {useLocation} from "react-router-dom";

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}
*/

/**
 * ?expo install expo-web-browser
 * Proporciona acceso al navegador web del sistema y 
 * admite el manejo de redirecciones
 */

WebBrowser.maybeCompleteAuthSession();
 /*
 Se utiliza para descartar la ventana emergente web. 
 Si olvida agregar esto, la ventana emergente no se cerrará.
 */



const Login = ({navigation}) => {
    const [result, setResult] = useState(null);
    
    const [token, setToken] = useState("");

    //Va esperar que el boton sea presionado para abrir la url
    const _handlePressButtonAsync = async () => 
  {
    let result = await WebBrowser.openBrowserAsync(accessUrl);
    setResult(result);
  };


  return (
   <View style={{flex:1, backgroundColor:'black'}}>
        <View style={styles.TituloDeIntrucciones}>  
          <Text style={styles.Intructions}>INSTRUCCIONES</Text>
        </View> 
        
        <View style={styles.CuerpoDeIntrucciones}>
          <Text style={styles.Texto}>1.- Abrir el navegador presionando el boton "open browser"</Text>
          <Text style={styles.Texto}>2.- Registrate con tu cuenta de usuario</Text>
          <Text style={styles.Texto}>3.- Aceptas los terminos y condiciones</Text>
          <Text style={styles.Texto}>4.- Abrira una pagina y copias el link y cerrar la ventana.</Text>
          <Text style={styles.Texto}>5.- El link copiado pegarlo en la caja de texto "Link"</Text>
          <Text style={styles.Texto}>6.- Presione el icono de Waves para iniciar</Text>        
        </View>

        <View style={styles.browser}>
          <Button onPress={_handlePressButtonAsync} style={styles.estiloButton}>
            <Text style={{left: '160%', color: 'white'}}>Open browser</Text>
          </Button>
          <Button title="Open WebBrowser" onPress={_handlePressButtonAsync}/> 
        </View>

        <View style={styles.formAlign}>
          <Item style={styles.enlace}>
            <Input placeholder="Link" value={token} onChangeText={setToken} style={styles.enlaceInput} ></Input>
          </Item>
        </View>

        <View style={styles.IntereaccionDeIntruscciones}>
          <TouchableOpacity
              onPress={() =>
              navigation.navigate('WaveHome',{token})
            }
          >
          <Image
            source={require("../../assets/Logo_Waves.png")}
            style={styles.logoApp}
          />
          </TouchableOpacity>
        </View>
 
    </View>
  );
};
////source={require("../../assets/Logo_Waves.png")}
// E S T I L O S

const styles = StyleSheet.create({
    TituloDeIntrucciones:
    {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: 'black',
        
        //paddingTop: Constants.statusBarHeight,
    },
    
    CuerpoDeIntrucciones:
    {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: 'black'
          //  paddingTop: Constants.statusBarHeight,
    },

    IntereaccionDeIntruscciones:
    {
        flex: 1,
        alignSelf: "center",
        backgroundColor: 'black',
        top: '-10%'
        //paddingTop: Constants.statusBarHeight,
    },

    /*LogoSize: 
    {
        width: width,
        height: height * 0.15,
        resizeMode: "contain"
    },*/
    Intructions:{
      fontSize: 35,
      color: 'white',
      left: '7%',
      top: '-10%'
    },
    Texto:{
      color: 'white',
      fontSize: 16,
      left:'3%',
      top: '-25%'
    },
    browser:{
      flex: 0.5,
      backgroundColor: 'black'
    },
    formAlign: {
      //flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'black'
    },
    enlace: {
      width: '70%',
      height: '25%',
      alignSelf: "center",
      backgroundColor: 'white',
      top: '-15%',
      
    },
    /*enlaceInput:{
      borderWidth: 1,
      borderColor: '#94618e',
    },*/
    estiloButton:{
      backgroundColor: '#49274A', 
      //marginLeft: '32%',
      height: '50%',
      width: '40%',
      alignSelf: "center"
    },
    logoApp: {
      width: width,
      height: height * 0.15,
      resizeMode: "contain",
    },

    
});

export default Login;