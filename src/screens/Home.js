import React, { useEffect, useState } from "react";
import {ObtenerToken}from "../api/backend";
import { Content,H1, H3, Input, Container, Left, Spinner, Item, Card, CardItem, Body, header, Button, Icon} from "native-base";
import { StyleSheet, Image, Text, Dimensions, FlatList, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { TouchableOpacity } from "react-native-gesture-handler";

// Valores del destructing
const {width, height} = Dimensions.get("window");

const Home = ({route, navigation}) =>
{
    //manejo de los artistas
    const [artist, setArtist] = useState(null);
    const [error, setError] = useState(false);

    //Promesas
    const getArtist = async () =>{
        try {
            const response = await backend.get(`me/top/artists?time_range=long_term&limit=1&offset=0`);
            //console.log(response);
            setArtist(response.data);
        } catch (error) {
            setError(true);
            //console.log(error);
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

    /*return(
        <Container style={styles.Contenedor}>
            <H1 style={styles.title}> Hi </H1>
            <H1 style={styles.title}> gustavo.exe </H1>
            <Text style={styles.text}>most listened artists</Text>
            <Card style={styles.CardContainer} >
                <CardItem style={styles.CardItem} cardBody>
                    <Body>
                        {console.log(item.images)}
                        { item.images.map((image)=> (
                            <Image key={image.id} source={{uri: image.url}} style={styles.artistImage}></Image>
                        ))
                        }
                    </Body>
                </CardItem>
            </Card>
        </Container>
    )*/

    //const { token } = route.params;
    return(
        <Container style={styles.Contenedor}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/WaveWhite.png')} />
                <Entypo style={styles.out} name="log-out" size={39} color="black"/>
            </View>
            
            <View style={styles.datos}>
                <H1 style={styles.title}> Hi </H1>
                <H1 style={styles.title}> gustavo.exe </H1>
                <Text style={styles.text}>most listened artists</Text>
            </View>
            

            <FlatList
                data = {artist.items}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No se han encontrado artistas</Text>}
                renderItem={({ item }) =>{
                    return(
                        <View>
                            <Card style={styles.CardContainer}>
                                <CardItem style={styles.CardItem} cardBody>
                                    <Body>
                                        {console.log(item.images)}
                                        { item.images.map((image)=> (
                                        <Image source= {item.image} alt={item.image} style={styles.artistImage}/>
                                        ))
                                        //<Text>{item.name}</Text>
                                        }   
                                        
                                    </Body>
                                </CardItem>
                            </Card>
                            
                        </View>
                    )
                    
                }}
            />
            <View>
                <Button title="Top artists" onPress={ () => navigation.navigate('WaveTop',{token})} />
            </View>
            
        </Container>
        /*<Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Content>*/
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    datos:{
        flex: 0.6,
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

    CardContainer: {
           
        left:15,
        width: width *0.91,
        height: height * 0.5
    },
    CardItem:
        {
            height:'70%',
            backgroundColor: 'rgba(64,62,62,80)'
    },
    artistImage:
        {

            left: 0,
            right:20,
            width:width *0.81 ,
            height: height * 0.3,
            margin: 20
    },
    /*const { token } = route.params;
    useEffect(()=>
    {
      ObtenerToken(token);  
   
    

    return(
        <Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
        </Content>
        
    )*/
});


export default Home;