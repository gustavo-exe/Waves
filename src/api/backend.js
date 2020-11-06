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

const Auth='BQAGEelgR-Gd0fPN6Cek5wFJlLv0ihnjBgPTy08CB3u3kEgZBp0kPf_ziYWKYmWSSPx-C6HpG6TsG1mnhVOnVohJ0zXM786NfKnMSnI5TIg995j_vh3ebLRyP8ACVnTSbGYoyz7lN9L9eZG9M08VslyMFd0q_BbYMtRujyvQWiJK4tZMgwRV5KWUxSS7rf8xvvquUb2qLSvJfKH9ALJEldafVClDar1apG7u2fLbhHEAg9duDkKsbtp6-SdWfxpSU7sH8fOw1bhxKa5e-s85-LWjlBZiGMlq3LQ';
const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    {
        
        'Authorization': `Bearer ${Auth}`
    }
});

export default instance;