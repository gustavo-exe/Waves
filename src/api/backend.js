import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQBeY8M99y1mCioOG1ejqglYCGC1ZswRFMCooSgbzHpmWtUygRtu3DveE1WfU2qtQcDCEzmkyTGio9sDE9jZ8eUFErlsw_eMHfw8gimRAR5Lw7mxM5fJBdTLY8pZiNCSSfWrEOOIEV-XNqqEykFfnvwn2gn7KGAuxlqJBtYR-ULmqhBzjUomXEoWwCfl_PN-ZzvXjb2ivfhTBYubN3yaow1_3MP_47dB0bvp1Gcqmg2bHKfhcCad-5Yv9nqSR5l5TLmw6dtZ_WpUavAN9P_yoMiCekdXacPFGkk'];

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