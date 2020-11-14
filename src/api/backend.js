import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQBCpff8F1ZRugWuubmsHtrrRJ97TdjR5RNiYzTsm1d-Dlep_B2MWyi3rKg2Shpesnl8V42NRcF9r97VsSdiNUQrUoant5zWHTdrklrqpzgyaxeJZT1tUIbGM7abhW737gTcjqCRZXKQCVTb_FaWX6WST-0Yw4JrB0wergMizlCDWYtW4QkrZWtb_zSEsOlMdB6l6xQVfIfIopMHo9w-oT8VnrtIwngEOjtiTmZkn3Xq_3NSKOX4g0JKEnYZD0oEakD--QulSb-oJ2X67vLkA0d3tQ_q_VSELx4'];

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