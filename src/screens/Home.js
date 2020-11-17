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
        <Container style={{flex:1, backgroundColor: 'transparent'}}>
            <Image source={require("../../assets/Degradado.png")} style={{flex:1, zIndex: 0, width: width, height: height * 0.5} }>
            </Image>
            
            <View style={{position:'absolute' , flex:0.5, width:width , backgroundColor:'transparent'}} >   
                            
                    <Text style={styles.welcome}> Hi,</Text>
 			        <Text style={styles.welcome}> {user.display_name} </Text>
            		<Text style={styles.mostListened}> Most listened artist</Text>
            </View>

            <View  style={{position: "absolute" ,top: height*0.18 ,backgroundColor:'transparent'}}>
            <FlatList
                data = {artist.items}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>User not found</Text>}
                renderItem={({ item }) =>{
                    return(
                        <View style={{backgroundColor: 'transparent'}}>
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
        backgroundColor:'transparent'
    },

    topImage:
    {
            left: 0,
            right: 15,
            width:width * 0.77,
            height: height * 0.4,
            borderRadius: 15,
            margin: 27,
            top: '-10%'
    },
    name:{
        color: '#F4DECB',
        //color: '#49274A',
        left: '50%',
        top: '-155%',
        fontSize: 35
    },

    next:{
        backgroundColor: 'transparent', 
        flex:0.6, 
        position: "absolute", 
        width: width, 
        top: height * 0.65
    },
    welcome:{
        color: '#F4DECB',
        left: '9%',
        //alignItems: "flex-start",
        top: '26%',
        fontSize: 26,
        //fontStyle: 'italic'
    },
    mostListened:{
        color: '#F4DECB',
        left: '9%',
        //alignItems: "center",
        top: '40%',
        fontSize: 22,
        //fontStyle: 'italic'
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