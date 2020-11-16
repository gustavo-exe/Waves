import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQCgvwAWFaNgnjSQEtda35p2fGzkaFpykJI8kbrEbOtJ_qcinWumbNyxX8ZVUYfVongI7dvX5HCLTJjXgqiQONZ7JqzNMdqqReoN4QS568dn5H_26kAMMGbmIwUdY4x7tjBPoFZp_EBcmesfhI3CEr-wHxSEFgqTSfK2040BWX8paUOYdshEFz-Pt-6K_xNTvZqB-7gxee0csmWxIaYlOl-lg2XpZ2gGbsRY4sVBu-AxxITqAMfZsEmfvJA99ggjy8L8NqgENRokjN_Pltr42s8Tl8Qshn_I4a4'];

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