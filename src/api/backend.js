import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQDgTz0otH3nNx69WkF3ZSSGU-Oc1_tgePRnODljZ_8O9ItGHX8netxQfZFvI2eTfsgF_OQTflCh18xGYqqZV99a9uFdw9XZlWEBt0_VbUmW_GheLEITs10xutLmiNLfFsPKejX8wfQfg74lg27O33DXjLfRkNPn38Xkf__-w09jQcUiPN1jlTdm1aY4px_j_tKtDZ3GvPIoMK79OR7srI1ZRm2Zuufs9i_Plik4fBIk4bHL9sRip4HdK6lyzZiRBRkopP3MKbiI-dy9np84ytv53KEeC6gihWY'];

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