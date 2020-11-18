
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQBjQjwssmV7yYIX4gt94CAVAJlMpWsfehUNYyU1it6uSQl6X0keq_ufNjE8X9L96o3a1Q-Tsf3bDd_zyKBRWAEKbXNzh1FeMuujePCceKb8MtPEBhKlUhWotiIJ8RilAvCW8WHx__5kuQJ7v05Sdmm_ou1LSpxxJzCvxCBfkpHQUP4bVxLWYCa9lK5RnyDox41mI_xskvVVXvbRTJ6KALj_X6moAj-N9uHP6ixW-NtwZBtX9__epGPpjt6QHmTC9GapjGR4KMrNLN9WUHHsj2WacsgRJbtKIos'];

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