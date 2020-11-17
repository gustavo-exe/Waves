import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQAFIB8uW0BZqD-RhnubiKGlrzEqU-UzEcaFuGLMOaD66eozPZ2Ul66mWULOGyzIXk_OmC3uyPg_sM5JrbVUSimzpHudNibFsCV943jwdclSv9RGge3rfe_U9aDRVABZtkDalbDOpwhtjZaN1PBbbu6jqAsu5n4_x58SeQaGbTkyDb-HJU3VorKQ8HAt0uWAf9eTLKLj46HFlJra6NiPNoG4c15jtzM8UtXADNWaGwI3cEm-RujHDZlzRfH2-SXKaOAvPbpwNkRwFsUxOJ5uq3gNFIzHC7L1KaE'];

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