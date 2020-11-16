import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQAgdctZ7A3rmTeqYSieiAtAAy9JGbcu6RLKyvLXCubCu79Bmy9cEEB27UNDwL_Ng9p9xaxD5YUkz9QDIyuxBUhEgj8x5Ck2MsOoaQ4h4MDd0TJsaZXiL7Ul-pRyzfqzqQolcPYnhhLWUyU0PkOGMUEX-17sPFtCwKnsCkoLYDw4rPwVrW1UFI4lne5RfriWJd5H6a_3gId2irns_vjSthoI8jiAv2QDRHaqw8ZvpL2fwHR8-kyTIQ2fISbXrpw5OcDM6rA6ko38T03aH0tDcfYhQ4q-s-cSvNA'];

export function ObtenerToken(token)
{
     
    AuthToken.push(token);
    console.log("Backend!!",AuthToken[1]);

}


console.log("Porque:", AuthToken[1]);

const Auth='';
const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    { 
        'Authorization': `Bearer ${AuthToken[0]}`
    }
});

export default instance;