import { Content, H1} from "native-base";
import React, { useEffect, useState } from "react";

const Home = ({route, navigation}) =>
{
    const { token } = route.params;

    return(
        <Content>
            <H1> Este es mi token: {token} </H1>
        </Content>
        
    )
}

export default Home;