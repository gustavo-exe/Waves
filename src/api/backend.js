
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

let AuthToken=['BQBq5tfr07v6EOmHNcQM8kTFhFX6nT2JfBqPfpp0OjEMNc8gfcPdSvQWWefc55WgYSUKoNzpjBigVOYUe7rIkmoRT9zK5VKwB6eNEVXQ40-8hfEPaCOLNMsEKNvJEeOoqUNYuoOhmqrnl3L6NnJqlpWpLphQtlzznwYPNB1kX4r2EK7QYWO6GLkI6YqhSp2F54Ig4VQkqN8BTgcSySGCQnTG3ivUs6WaMECtcq7UkHujbFHDMowWm4xDDTx4k0IQdJ5wzcUlSCrJ83JSECl4fOp7e8fyencZDrw'];

/*
Link para solicitar OAuth Token:
https://developer.spotify.com/console/get-current-user/

Para solicitar el token ocupamos 3 scopes:
    user-read-private
    user-read-email
    user-top-read
*/

export function ObtenerToken(token)
{
    //Splice remplazo un valor del arrelo con uno nuevo
    AuthToken.push(token);
    console.log("Backend!!",AuthToken[1]);

}
console.log("Backend!!",AuthToken[1]);
const instance = axios.create({
    
    baseURL: apiURL,
    headers:
    { 
        'Authorization': `Bearer ${AuthToken[0]}`
    }
});

export default instance;