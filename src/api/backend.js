
import axios from "axios";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();

//Aqui tiene que ir el nuevo token
let AuthToken=['Here OAuth Token'];

/*
Link para solicitar OAuth Token:
https://developer.spotify.com/console/get-current-user/

Para solicitar el token ocupamos 3 scopes:
    user-read-private
    user-read-email
    user-top-read
*/

//Esta funcion se hace para traer el token del input
export function ObtenerToken(token)
{
    
    AuthToken.push(token);
    console.log("New token: ",AuthToken[1]);

}

const instance = axios.create({
    
    baseURL: apiURL,
    headers:
    { 
        'Authorization': `Bearer ${AuthToken[0]}`
    }
});

export default instance;