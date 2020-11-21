
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

let AuthToken=['BQC8ljiiuQudjRPc4VKYehOeuXuNzZxJkIo2O0oRJhioSuA13knm7kj3HfwkmsdCa-07z72P4PmOhi5lqxrfGZdPw_wYKpVCRp3mpStxJ4oQgH2qCPCJRvDIhXH3Cdfz6rXT4PXHIempinXhIolzML_m1srizdj_oNrTltoD-zp2c7wVpnW9_J-4ZRrOIiepZwltkLPEAZ5xualOnvy9-_QSP-q31MLD6tGPhIYDG4gaQ-ElwBrw72Iu4DZzKM3D-cwFrCZGWbLBWqY4oW70llY5fuqEjjJbbno'];

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