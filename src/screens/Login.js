import React, { useState } from 'react';
import { StyleSheet,Button,View,Text, Image,Input } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { accessUrl } from '../../enviroment';
import {Container} from 'native-base';


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



const Login = () =>
{
  const [result, setResult] = useState(null);

  //Va esperar que el boton sea presionado para abrir la url
  const _handlePressButtonAsync = async () => 
  {
    
    let result = await WebBrowser.openBrowserAsync(accessUrl);
    setResult(result);
  };

  return (
    <Container>
    <View>
      <Text>Intrucciones</Text>
    </View> 
    <View>
     <Text>1.- Abrir el navegador precionando el boton "open browser"</Text>
      <Text>2.- Aceptas los terminos y condiciones</Text>
      <Text>3.- Abrira una pagina y copias el link y cerrar la ventana.</Text>
      <Text>4.- El link copiado pegarlo en la caja de texto "Link"</Text>
      <Text>5.- Presione el icono de Waves</Text>        
    </View>
    <View>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Input placeholder="Link" ></Input>
      <Image source={require("../../assets/Logo_Waves.ong")}/>
    </View>
    </Container>
  );
};

// E S T I L O S

const styles = StyleSheet.create({
    TituloDeIntrucciones:
    {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
    
    CuerpoDeIntrucciones:
    {
            flex: 1,
            alignItems: 'left',
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight
    },

    IntereaccionDeIntruscciones:
    {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    }

});

export default Login;