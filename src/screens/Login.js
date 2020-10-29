import React, { useState } from 'react';
import { StyleSheet,Button,View,Text,Dimensions, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
//import Constants from 'expo-Constants';
import { accessUrl } from '../../enviroment';
import {Container, Input} from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
   <>
        <View style={styles.TituloDeIntrucciones}>
        <Text>Intrucciones</Text>
        </View> 

        <View style={styles.CuerpoDeIntrucciones}>
        <Text>1.- Abrir el navegador precionando el boton "open browser"</Text>
        <Text>2.- Aceptas los terminos y condiciones</Text>
        <Text>3.- Abrira una pagina y copias el link y cerrar la ventana.</Text>
        <Text>4.- El link copiado pegarlo en la caja de texto "Link"</Text>
        <Text>5.- Presione el icono de Waves</Text>        
        </View>

        <View style={styles.IntereaccionDeIntruscciones}>
        <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
        <Input placeholder="Link" value={token} onChangeText={setToken} ></Input>

        <Button title="Cambiar" onPress={ () => navigation.navigate('WaveHome',{token})} />
        </View>
      
    </>
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
        //paddingTop: Constants.statusBarHeight,
    },
    
    CuerpoDeIntrucciones:
    {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          //  paddingTop: Constants.statusBarHeight,
    },

    IntereaccionDeIntruscciones:
    {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        //paddingTop: Constants.statusBarHeight,
    },

    LogoSize: 
    {
        width: width,
        height: height * 0.15,
        resizeMode: "contain"
    }

});

export default Login;