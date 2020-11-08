import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";


var AuthToken;
export function ObtenerToken(token)
{
     
    AuthToken = token;
    console.log("Backend!!",AuthToken);

}


console.log("Porque:", AuthToken);

const Auth='BQADB7d5MXpO1-P6cXkBgbIflsoCN48xheZj_g7hvUt-2nmVLE96UQtPjQbCK972OM1TU2_im5utnnsiyxVIsJlDEEXecr8YrnPa_GmUquf8x7YujnlTadFZYFJb-h4HJDbg9HYfBe6tE6fEQhdhdso1eXkqLZhmDbJI9MfCPXVz5-yq_aWDmqvDuLcpaaxg7Gif02zsRkV1uzuEztvGaRC227TewMYKeP1q3CEhGm3a7yTnEzP7bnReUj4VwLc2AXNW7q-PCsZOKGI8VJ_KqR5usMyONhgWb3M';
const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    {
        
        'Authorization': `Bearer ${Auth}`
    }
});

export default instance;