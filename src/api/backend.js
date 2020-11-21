
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

let AuthToken=['BQCRPZ-1QPYXfQj0j11QDnVSbvOHVCl2KBHAepFzLEMQv-ZHkcU8PPIMqciuT3P6IaY5dF4fkecWTm9AdS3bzuQUiOpXL8yM_gfRmXK61BBgk7wvre4-j5aMtnZ0I1ZiQ_-UorXARQMPwiD0cGQEVOkLOtDgPvTBprLYrweO2qK-48V0E1JgIcxdHBcgUDvWcoFDa2CQOfvsJv9hzp7Geiu2o9GOVGCaXF66Ayd_qnsMOLjPYkgEVPN977uypusGRl2udAxQjOxOSKfnvp9sCneRpTUN-akx_aU'];

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