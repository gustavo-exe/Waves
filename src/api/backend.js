
import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQCKjpGCtXoh8mgR5XKlGaq0-rMdSfwub7jvstoza6DDsz3bO88y8PyI-g01c_SnFGFy_2LvsioJ7_ko2_If1K0fZxXwgE_Yg5-Dn5Qv_sZzj2KlK2N4O7S1suOLOhWOlCQ9VaIAqZkYJ0VCboWSB6lB4ZyiCzBd47fK19m9_ggMkqx9RTs5TjABZQVRweHQIplKFbmzLT5cngHTZyNOcn9TMtM54GabOV2cEzW36IxGq-vV2LAm_EDBzCkeMaU0rT7njY31QC_lsB6HgAyYj5yvwFc5LzvUqvs'];

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