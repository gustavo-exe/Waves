import { Content,H1} from "native-base";
import { Button} from 'react-native';
import React, { useEffect, useState } from "react";
import {ObtenerToken}from "../api/backend";

const Home = ({route, navigation}) =>
{
    const { token } = route.params;
    useEffect(()=>
    {
      ObtenerToken(token);  
    });
    

    return(
        <Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Content>
        
    )
}


export default Home;