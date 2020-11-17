
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQApQO6AqNhu6c__Pm3otuvyj7rnPotmOROWoHEBBaOK9FWv1ydwq1Ady0yspYS8CjFPJ6oBA4LoerWo1UNgPmhDfnck2pIMc7RZdyvX3tQ0ShS9A60wiGiKWEtaaapG04Fx83VHB-0KGPp9Oa8qVu9ww1fu927sQKFVuIEM1SsM5v3QlI8SASngSucK20WH8sT3AtWz0WbseM0DUJKCTLqPfgA5J_X0ksTsti2kSuJvh9DOvPCbkrxW3B8bagfTEECkH1GSObhS76mV5_T3OajsJ47H9PAzyZE'];

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