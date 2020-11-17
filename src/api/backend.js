
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQCnSMKIm7DioDcCXjhEgb9WKiUcAa3FIrUsqc9iuQwV9ZmpxJZ6O0cNqE9WU2vDP1s3E6mIcMZubU19YAECKhrrwFBk-IpoFlS7JGXQTWdh6mgogOXmR50p4wnqavxOELEtjxs_Yxe5OYRaoTmP-BGW8cOKs4QgPowfyZdkpCSqh_kTo5Rljje7x0UnynvYwuzgeX9ZWeJrmKMtreC6qhZ6YklT4YZVh1EXh5E7c-gtvBlujaK4bjGEfda4sdvJSTbofYCmTFX7dEEmVroLUJQqzoEFOyl-lqQ'];

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