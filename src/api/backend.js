<<<<<<< HEAD
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

=======

import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQCG0eG1Q1LYv1scc85xc6nWV76FQKyv61V-O58DoQHMW_m5RQsGH-YUfgw1xGVCBv8S8Bk5t6wJkVWmJw4PWzpV4SN94BHCuTYN82bRMAHw_3mc6M6Bo4N_azwgraJ-_e_8IOslFZ3NFj1ZxgrfSEwEPsxyRyKPtY86vKwlSi4t3PzMkNa8Vp6zfQmBjcVntc-A1m-IQmdPdYvoeS5Mfm_ggjPLdeKqUq-JVss8C8tCoVmasEHY68QzEDbOOo5nsD8VbDyFjrP32JClup868C7XGuqfHTr_fY0'];

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

>>>>>>> 33cbc4e964c9c2b1b3e0485c64346d17f455d0b3
export default instance;