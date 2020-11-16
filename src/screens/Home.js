<<<<<<< HEAD
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
            
            <View style={{position:'absolute' ,flex:0.8, width:width ,backgroundColor:'orange' }} >           
                    <Button title="Top artists" onPress={ () => navigation.navigate('WaveTop',{token})} />
 			        <Text style={{position:'relative'}} > {user.display_name} </Text>
            		<Text> most listened artists</Text>
            </View>

            <View  style={{position: "absolute" ,top: height*0.18 ,backgroundColor:'green'}}>
            <FlatList
                    data = {artist.items}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text>No se han encontrado artistas</Text>}
                    renderItem={({ item }) =>{
                        return(
                            <View style={{backgroundColor: 'blue'}}>
                                
                                    <CardItem style={{alignItems:'center', backgroundColor:'pink'}}>
                                        
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
            
            <View  style={{backgroundColor:'red', flex:0.6, position: "absolute", width: width, top: height * 0.75 }} >
                <Button  title="Top artists" onPress={ () => navigation.navigate('WaveTop',{})} />
                
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
    },

    topImage:
        {
            left: 0,
            right:20,
            width:width * 0.70,
            height: height * 0.3,
            margin:34
           
        },

    CardText:
    {
        height: '10%',
        backgroundColor: 'rgba(64,62,62,80)'
    },
    name:{
        color: '#F4DECB',
        left: 20,
        fontSize: 25,
        top: -25
    },
    boton:{
        color: '#94618e',
        right:17
    }

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


=======
import { Content,H1} from "native-base";
import { Button} from 'react-native';
import React, { useEffect, useState } from "react";
import {ObtenerToken}from "../api/backend";

const Home = ({route, navigation}) =>
{
<<<<<<< HEAD
    const { token } = route.params;
    
=======
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
>>>>>>> 74b3754ae19b5f35cc9bb406792ddbecbf1b7d37
      ObtenerToken(token);  
   
    

    return(
        <Content>
            <H1> Este es mi token: {token} </H1>
            <Button title="Cambiar" onPress={ () => navigation.navigate('WaveTop',{token})} />
            <Button title="collage" onPress={()=> navigation.navigate('WaveCollage',{})} />
        </Content>
        
        
    )
}


>>>>>>> 1c3f1300563e03f25f01b8f8fc3abfe5484da538
export default Home;