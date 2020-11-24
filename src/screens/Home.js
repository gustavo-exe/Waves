import React, { useEffect, useState } from "react";
import {colocarToken}from "../api/backend";
import {  Container,  Spinner, Button,  CardItem} from "native-base";
import { StyleSheet, Image, Text, Dimensions ,FlatList, View} from 'react-native';
import backend from "../api/backend";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Valores del destructing
const {width, height} = Dimensions.get("window");

const Home = ({route, navigation}) =>
{
    const { token } = route.params;
    
    colocarToken(token);

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

    //const { token } = route.params;
    return(
        <Container style={{flex:1, backgroundColor: '#F4DECB'}}>
            
            <Image source={require("../../assets/Degradado.png")} style={{flex:1, zIndex: 0, width: width} }>
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
                                    
                            <View  >
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </View>
                    )
                }}
                />
            </View>

            <View style={styles.next} >
                <Button style={styles.estiloButton} onPress={ () => navigation.navigate('WaveTop',{})}>
                    <MaterialCommunityIcons name="artist" size={28} color="#F8EEE7" />
                    <Text style={{color: '#F8EEE7', fontSize: 18}}>Top artists</Text>
                    
                </Button>
                <Button style={styles.estiloButton} onPress={()=> navigation.navigate('WaveCollage',{})}>
                    <MaterialCommunityIcons name="collage" size={28} color="#F8EEE7" />
                    <Text style={{ color: '#F8EEE7', fontSize: 18}}>Collage</Text>
                </Button>
            </View>
         
            

        </Container>
    )
}

const styles = StyleSheet.create({

    cardImage:{
        alignItems:'center', 
        backgroundColor:'transparent',
        height: height * 0.4
    },

    topImage:
    {
            left: 0,
            right: 15,
            width:width * 0.77,
            height: height * 0.4,
            borderRadius: 15,
            margin: 27,
            top: '0%'
    },
    name:{
        color: 'black',
        textAlign:'right',
        marginRight:'12%',
        fontSize: 18
    },

    next:{
        
        flexDirection:'row',
        flex:0.8, 
        position: "absolute", 
        width: width, 
        top: height * 0.65,
        height:height*0.23
    },
    welcome:{
        color: '#F8EEE7',
        left: '9%',
        top: '16%',
        fontSize: 26,
        fontWeight:'bold'
    },
    mostListened:{
        marginTop:'10%',
        color: '#F8EEE7',
        left: '9%',
        top: '4%',
        fontSize: 14,

    },
    estiloButton:{
        justifyContent:"center",
        backgroundColor: '#49274A',
        height: '80%',
        width: '40%',
        top:'9%',
        marginLeft:'6.5%'
    },

});

export default Home;