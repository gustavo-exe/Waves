import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQBwE0ThW4a3f9WWiTtF05DK2whrm7pCQ-sv9th6EATufXt-WvLd7WsjqvGoPRovva--uIdMNdnbUje3_LnIkHocl1qcp-PWOL15PKhgDSmjf0ntnsdoVys5ZkowkWZwgZe9cZzXT1G_046gPC93Riyw2dHo2qm5oQ8T-Nxu37mrhRYPKQgRLOJe3Cb_xfyC4gAiGn4JoXHuwQ3ZNvh2LNI-mYMsQ1o6vv8rWFOzmuXfa22neb3XlWCZHfrxLHt0bpEbtEt78eSgLm7FU9cHveLbGwqxhLiAd9A'];

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