import axios from "axios";
import getEnvVars from "../../enviroment";

const { apiURL } = getEnvVars();


const instance = axios.create({
    
    baseURL: "https://api.spotify.com/v1/",
    headers:
    {
        'Authorization': 'Bearer BQBqW1zC6sXpaaKJtNLJnmoP34JYRxOr5jMlrrf22xpGIBNfrChQxwYK_d4EBdOV5YoU6RSndzF1LPUVyZTX0sZbf23QygWlLNjg4vFtisPV7xZTiL-wNnXUMuOn5IDWLUXsRRyXQz3d5LlPG60gE0vcUSNeVFYq36-cO2wZA-WbhS43_jLhd_1PRzuUGpcFHexnVAHSXQCWhiyFJBWh1lC_ZQ6N8nrYkAbHou3otNfS8GbnR8uyO4gpWTYhwRgQn0uDusdpb1UGPWvbG1lkbmGNUkhq7wyD-jA'
    }
});

export default instance;