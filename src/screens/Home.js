import { Content,H1} from "native-base";
import { Button} from 'react-native';
import React, { useEffect, useState } from "react";

const Home = ({route, navigation}) =>
{
    const { token } = route.params;

    return(
        <Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Content>
        
    )
}

export default Home;