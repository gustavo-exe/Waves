import axios from "axios";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import{AsyncStorage} from "react-native";


//Aqui tiene que ir el nuevo token
let AuthToken=['BQAkPAlURxSqy6315pfwZlcRmeIyKidvL0Y3lOpm1ySpOZ4SmObZsk1QgXs1ytHgVXYCqj9tyPfNmXDUHNArMjfcuOEvfHaYs5OLKsQmUNbhJHsoVnCZGM94pod1ivYz55Gdl7bs--2q1cokg2HR31MEDQhEVVAMN2RqrDNRBoFFGAnwmmuZiOeK1oX1eA'];

/*
Link para solicitar OAuth Token:
https://developer.spotify.com/console/get-current-user/

Para solicitar el token ocupamos 3 scopes:
    user-read-private
    user-read-email
    user-top-read
*/

//Aplicando AsyncStorage

async function ObtenerToken()
{    
    let objeto ={token:' '};
    try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          // Tenemos datos
          //console.log(value);
          objeto.token=value;
          //return objeto;

        }
      } catch (error) {
        
      }
    //console.log(objeto.token);
    return objeto;
}

//Aqui se imprime el authtoken que se almacena con el input

async function imprimirToken() {
    //Esta fueron una de las formas que logramos sacar el token del AsyncStorage
    
    console.log("Tu token:");
    console.log((await ObtenerToken()).token);
    return((await ObtenerToken()).token);
    
    //(async()=>console.log( await ObtenerToken()))()   
    //return await ObtenerToken();
}

//Esta funcion se hace para traer el token del input
export async function colocarToken(token)
{
    try
    {
        await AsyncStorage.setItem('token',token);
    }
    catch(error)
    {
        //
    }
}


const instance = axios.create({
    
    baseURL: apiURL,
    headers:
    { 
        'Authorization': `Bearer ${AuthToken[0]}`
    }
});

export default instance;