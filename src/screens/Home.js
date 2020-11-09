import React, { useEffect, useState } from "react";
import {ObtenerToken}from "../api/backend";
import { Content,H1, H3, View, Input, Container, Left, Spinner, Item, Card, CardItem, Body} from "native-base";
import { Button, StyleSheet, Image, Icon, Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { FlatList } from "react-native-gesture-handler";

const Home = ({route, navigation}) =>
{
    //manejo de los artistas
    const [artist, setArtist] = useState(null);
    const [error, setError] = useState(false);

    //Promesas
    const getArtist = async () =>{
        try {
            const response = await backend.get(`me/top/artists?time_range=long_term&limit=1&offset=0`)

            setArtist(response.data);
        } catch (error) {
            setError(true);
        }
    }

    //Hook de efecto
    useEffect(() =>{
        getArtist();
    }, []);

    if (!artist){
        return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <Spinner color="blue"/>
            </View>
        )
    }

    //const { token } = route.params;
    return(
        <Container>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/WaveWhite.png')} />
                <Entypo style={styles.out} name="log-out" size={39} color="black"/>
            </View>
            
            <H1 style={styles.title}> Hi </H1>
            <H1 style={styles.title}> gustavo.exe </H1>
            <Text style={styles.text}>most listened artists</Text>

            <FlatList
                data = {artist.items}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No se han encontrado artistas</Text>}
                renderItem={({ item }) =>{
                    return(
                        <View>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <Image source= {item.image} alt={item.image} style={styles.artistImage}/>
                                        <Text>{item.name}</Text>
                                    </Body>
                                    
                                </CardItem>
                            
                            </Card>
                        
                        </View>
                    )
                    
                     
                    
                   
                }}
            />

            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Container>
        /*<Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Content>*/
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: "#49274A",
        justifyContent: "space-around",
        alignItems: "center",
    },
    logo: {
        width: 47,
        height: 30,
        justifyContent: "flex-start",
        position: "relative",
    },
    out:{
        position: "relative",
    },
    title: {
        color: '#49274A',
        fontWeight: 'bold',
        left: 10,
        top: 15,
    },
    text: {
        fontWeight: 'bold',
        left: 12,
        top: 25,
    },
    /*const { token } = route.params;
    useEffect(()=>
    {
      ObtenerToken(token);  
    });
    

    return(
        <Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Content>
        
    )*/
});


export default Home;