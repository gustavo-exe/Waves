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
      
          <Text style={styles.Texto}>1.- Abrir el navegador presionando el boton "open browser"</Text>
          <Text style={styles.Texto}>2.- Registrate con tu cuenta de usuario</Text>
          <Text style={styles.Texto}>3.- Aceptas los terminos y condiciones</Text>
          <Text style={styles.Texto}>4.- Abrira una pagina y copias el link y cerrar la ventana.</Text>
          <Text style={styles.Texto}>5.- El link copiado pegarlo en la caja de texto "Link"</Text>
          <Text style={styles.Texto}>6.- Presione el icono de Waves para iniciar</Text>        
        </View>

        <View style={styles.browser}>
          <Button title="Open Browser" onPress={_handlePressButtonAsync} style={styles.estiloButton}>
            <Text style={{textAlign:'center', left:'120%' ,color: 'white'}}>Open browser</Text>
          </Button>
        </View>

        <View style={styles.formAlign}>
          <Item style={{ backgroundColor:'black' ,color:'black'}} >
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

// E S T I L O S

const styles = StyleSheet.create({
    TituloDeIntrucciones:
    {
        flex: 2,
        position:'relative',
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight:'10%'
        //paddingTop: Constants.statusBarHeight,
    },
    enlaceInput:
    {
      marginLeft:'7%',
      marginRight:'7%',
 
      backgroundColor:'#F4DECB'

    },
    CuerpoDeIntrucciones:
    {
            flex: 1.5,
            

            minHeight:'25%',
            justifyContent: "center"
    },

    IntereaccionDeIntruscciones:
    {
        flex: 1,
        alignSelf: "center",
        backgroundColor: 'black',
        top: '-10%'
        //paddingTop: Constants.statusBarHeight,
    },
    Intructions:{
      fontWeight:'bold',
      fontSize: 30,
      color:'#F4DECB',
      marginLeft:'7%',
      marginRight:'7%',
      marginBottom:'7%'
    },
    Texto:{
      marginLeft:'7%',
      marginRight:'7%',
      color: 'white',
      fontSize: 16
    },
    browser:{
      flex: 0.5,
      backgroundColor: 'black',
      alignItems:'center',

    },
    formAlign: {
      flex: 1,
      width:width,
      backgroundColor:'black',
      marginLeft:'0%',
      marginRight:'7%'

    },
    estiloButton:{
      backgroundColor: '#49274A', 
      height: '80%',
      width: '50%',
      alignSelf: "center"
    },
    logoApp: {
      width: width,
      height: height * 0.15,
      resizeMode: "contain",
    },

    
});

export default Login;