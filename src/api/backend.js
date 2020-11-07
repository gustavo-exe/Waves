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

const Auth='BQCN5ZODJJkN7pGhy0JI7D82j-GCuN3VeHioZU4OoW0k6wPQUqtd9sqK8IvcHvJd66E7mYnYQXNKr63-VUowEzXzOuj15tS4RD48QSKyqxpzP_FCJ1ylfW9k5UqZery7eznZHWZueP5W_RIPWEc80RtAh9lxPqmiGq35HroF4FrGGVUVNqfwFVzZQze5-Rnlzixkhmhi4DwM3i2XBj2xk1iAm9lpugkC8tP8Z8_kNiDOrVe3_J8y9d9Bn7NZ2v4Bhu-r0KJMbG4pBmXOQwy9vGhiTXvFh_sJM4U';
const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    {
        
        'Authorization': `Bearer ${Auth}`
    }
});

export default instance;