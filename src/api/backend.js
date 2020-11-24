import axios from "axios";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import{AsyncStorage} from "react-native";


//Aqui tiene que ir el nuevo token
let AuthToken=[''];

/*
Link para solicitar OAuth Token:
https://developer.spotify.com/console/get-current-user/

Para solicitar el token ocupamos 3 scopes:
    user-read-private
    user-read-email
    user-top-read
*/


async function ObtenerToken()
{    
    return await AsyncStorage.getItem("token");
}

//Aqui se imprime el authtoken que se almacena con el input

function imprimirToken() {
    console.log("Tu token:");
    (async()=>console.log( await ObtenerToken()))()   
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