import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQA8enLLb8Eg47l4VlNoRhit1BWN1z2dnIS1oPusq4UVytv9Z9nkA8Gk_Js1vMYBZRrgGERSWETYah6SSKaIHSgDc8-Xb08Zg0d1CkBRs1RB3dKSWG0tDUohSVuyIwdeqYEIFC85YKRUz0fiT62heqyrfSUOEn5altgwUHh2r5epdLfPfBrYsV_ogG0r3Q'];

export function ObtenerToken(token)
{
     
    AuthToken.push(token);
    console.log("Backend!!",AuthToken[1]);

}


console.log("Porque:", AuthToken[1]);

const Auth='BQD_2Z9aS--4G1ElcDqcOq-WEsm-AMS_Nle8JqiCbR7e-5ouwfPO_-AwGP0vFxFemlNfdPKGaqdCwFKVF1zxODeviDwDGvr7C-ecIwY4VHoHMOpqmvo5bM3deEqcKIpDCuZpI2hBoccQwmXEd_TqPl7G6y9Tx0yXd-SCh0d8CcC6_jmq8-MSxrM-Vt0o7ae4z542bk9XLrVTWlUV3CTaee8htzhwr2xhFgjn9rveytE84Jx-VXrp3LSHOik6uLxeTxztSX9QTXVi4L-fdJ33ZnTOzPuGGhVFaO8';
const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    {
        
        'Authorization': `Bearer ${AuthToken[1]}`
    }
});

export default instance;