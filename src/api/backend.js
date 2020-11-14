import axios from "axios";
import { concat } from "react-native-reanimated";
import getEnvVars from "../../enviroment";
const { apiURL } = getEnvVars();
import React , {useEffect, useState} from "react";

var AuthToken=['BQBsTyo3FCM3eOHuDaPhTMovRC6BDFcqhi9wthLCXLLqQYTLv7mxczxqnqwYi6K9BpnPbn-AFpvOoGgdH9Pqi1KYpA9D2eS4DNe_c6cTtFf-5t1E8mauQgOlSwSYpTU59inqx4SR9frJmFEPRpTKAELh4KKyLCezswDWYOJsYrINSveDtdQiP7A9kgNVfOoUe6M01Vb3niDlnTlLg7i9VdgGScVKhPygpde4bXxg9A2vBNOg8624sYxn4HrjEUXCkp_rY2IxsS4xX5Co6MCNhFpLUxSls2zpuK0'];

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