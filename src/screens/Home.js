import React, { useEffect, useState } from "react";
import {ObtenerToken}from "../api/backend";
import { Content,H1, H3, Input, Container, Left, Spinner, Item, Card, CardItem, Body, header,Icon} from "native-base";
import { StyleSheet, Image, Text, Dimensions,Button ,FlatList, View} from 'react-native';
//import { Entypo } from '@expo/vector-icons';
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
    const [user, setUser] = useState("");

    //Promesa para el artista más escuchado
    const getArtist = async () =>{
        try {
            const response = await backend.get(`me/top/artists?time_range=long_term&limit=1&offset=0`);
            
            setArtist(response.data);
            console.log(artist.data);
        } catch (error) {
            setError(true);
            //console.log(error);
        }
    }

    //Promesa para obtener el nombre del usuario
    const getUser = async() => {
        try {
            const response = await backend.get(`me`);
            setUser(response.data);
            console.log(response.data.display_name);
        } catch (error) {
            setError(true);
        }
    }

    //Hook de efecto
    useEffect(() =>{
        getArtist();
        getUser();
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
        <Container style={{flex:1, backgroundColor: '#F4DECB'}}>
            <Image source={require("../../assets/Degradado.png")} style={{ zIndex: 0, width: width, height: height * 0.5} }>
            </Image>
            
            <View style={{position:'absolute' ,flex:0.8, width:width ,backgroundColor:'#F4DECB' }} >           
                    <Button title="Top artists" onPress={ () => navigation.navigate('WaveTop',{token})} />
 			        <Text style={{position:'relative'}} > {user.display_name} </Text>
            		<Text> most listened artists</Text>
            </View>

            <View  style={{position: "absolute" ,top: height*0.18 ,backgroundColor:'#F4DECB'}}>
            <FlatList
                data = {artist.items}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No se han encontrado artistas</Text>}
                renderItem={({ item }) =>{
                    return(
                        <View style={{backgroundColor: '#F4DECB'}}>
                            <CardItem style={styles.cardImage}>
                                { item.images.map((image)=> 
                                    <Image key={image.id} source={{uri: image.url}} style={styles.topImage} ></Image>
                                    )}
                            </CardItem>
                                    
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </View>
                    )
                }}
                />
            </View>
            
            <View  style={styles.next} >
                <Button  title="Top artists" onPress={ () => navigation.navigate('WaveTop',{})} />
                <Button title="collage" onPress={()=> navigation.navigate('WaveCollage',{})} />
                
            </View>


            
            
        
        </Container>
    )
}

const styles = StyleSheet.create({

    cardImage:{
        alignItems:'center', 
        backgroundColor:'#F4DECB'
    },

    topImage:
    {
            left: 0,
            right:20,
            width:width * 0.70,
            height: height * 0.3,
            borderRadius: 15,
            margin:34     
    },
    name:{
        color: '#49274A',
        left: 50,
        fontSize: 25,
        top: -30
    },

    next:{
        backgroundColor: '#F4DECB', 
        flex:0.6, 
        position: "absolute", 
        width: width, 
        top: height * 0.75
    }

    /*Contenedor: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "flex-start",
        backgroundColor: 'yellow'
    },

    datos:{
        flex: 0.5,
        marginLeft: 10,
        justifyContent: "flex-end"
    },

    title: {
        color: '#49274A',
        fontWeight: 'bold',
        left: 8,
        top: 10,
    },
    text: {
        color: '#49274A',
        fontWeight: 'bold',
        left: 8,
        top: 18,
    },

    CardContainer: {
        left:15,
        width: width *0.94,
        height: height * 0.6,
        top: 22,
    },
    CardItem:
    {
        height:'10%',
        backgroundColor: 'rgba(64,62,62,80)'
    },
    artistImage:
        {

            left: 0,
            right: 20,
            width:width *0.81,
            height: height * 0.3,
            margin: 20
    },*/

    

    /*CardText:
    {
        height: '10%',
        backgroundColor: 'rgba(64,62,62,80)'
    },
    
    boton:{
        color: '#94618e',
        right:17
    }*/
});

export default Home;