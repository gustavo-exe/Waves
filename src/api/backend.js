import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQD2VnCOg_d6EKGvVAHQunpJ9BY0RJ97RZ0E_xB-jVgm7YRJJn5ozpZlbKDarROGkATg9st071l-AX2CLkT6Rpe12kFaUyWnwbnV1s3GDtc9ztiUAT2F_1uiYZ0Lpn8cO8ovXJJEnMuSDw80hKg_5KGCV-xr0lgOEIBKmDWG3sGcUzdb56cgJRF_0t-4d5pz9SyOazKj6MuID2cQKKU4qT0ZENWVgYbAu4TR6cE3fcn_l2UpMa8ZFNLIvIINSX1Y2OYrsF20ItOk7MxpYuab44FZYJ0enJW6uew'];

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