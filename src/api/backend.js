import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";


var AuthToken;
export function ObtenerToken(token)
{
     
    var AuthToken = token;
    console.log("Backend!!",AuthToken);

}


console.log("Porque:", AuthToken);
const Auth='BQCaJ11ij3IDyJnjOL2tiJPAgXrG3NU3oZPIKTlRCa711yN3k5pl3NHc6Hn06I5WDSCcIXdL6GkNri9SxxVM_5vf-i6Q68Lr1-lEXgH0oGP_92SAflM9v9EuQaDk2nZp8U2yqTMjep3LjRXaJz33s7qY87POiLzBqTRWKNfSGIMJOGZ6b8q8zgQSc8bwR-m_onl7OKKU7p23-f14xFUEcghS4pbRslMuPAEY-a27lJPuc0i07Vkw2Z4lu296Bjd3b22oup_eCA_AfDJowp7z3UiHoak-h0D1uGY';
const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    {
        
        'Authorization': `Bearer ${Auth}`
    }
});

export default instance;