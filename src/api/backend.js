import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQAKE5wyhehLWbKk8WfPdmCUrK1TovLICFBY0Q55EyYAfSfk_cRD1CRCmeT4ZdUGXTAfr_8LsmN7MJZaNzXTXuXhwzLYJXkpI9obf-w0lCFx7kl4RdsZXTRFn8IiCeqVm6D-DvIdTnoTcWAh4i4v_XTg4aGf6sYK3X2nQsiUbYVlbWeObW6NDesEFFqByj2EmQoZBZti3tWSUI8a5rTOPNOIUs5z9cmcnPHbtUDHvQhePt2AcxheKwZxKMu-CebfQXqE7L8GyXbTS4Z7lWKogho6b0jESceRWEw'];

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