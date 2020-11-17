
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQB_3kvTQr7s3TcRaIYsw5P9TuiPRonGNwL6ZibXAcAyB55yw_QbCIzOSEwO5L_hKnIOoEgRWgAelNEeE_AaJBW0yBpRX_D1ndvRMP71NE-YDgembJt9mRBJXxnEOSFyUFHrRqpCzLCYADMZjsmYx9lrdI0Llvgk_-tcJp6t84o9wD3cBUFfwAllyezelnxCubrkeTHrWRGopuxkg85NNCU_wNgCk1ECf9mhB6O3BiprTP05UEbeutgTjflX1yHzvzhWA5QPt4J8h0waiOrzYLdBGEh5PLOj7fA'];

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