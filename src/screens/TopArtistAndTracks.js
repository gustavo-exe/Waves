/**
 * Modulos necesarios
 */
import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3, Body
        } from "native-base";

import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { TouchableOpacity } from "react-native-gesture-handler";

// Valores del destructing
const {width, height} = Dimensions.get("window");

const TopArtistAndTracks = ({route, navigation}) =>
{
    //Estado del TOP
    const [top, setTop] = useState(null);
    const [error, setError] = useState(false);
    const [itemId, setItemId] = useState(null);

    //Promesa
    const getTop = async () =>  {
        console.log("Asincrona");
        try {
            //Consulta a la api
            const response = await backend.get(`me/top/artists?time_range=long_term&limit=50&offset=0`);
            
            //console.log("Estas aqui");
            //console.log(response.data);
            setTop(response.data);
            
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }
    
    //hook de efecto
    useEffect(() =>
    {
        getTop();
    },[]);

    if (!top) {
        return (
          <View style={{flex: 1, justifyContent: "center"}}>
            <Spinner color="blue" />
          </View>
        )
      }


    return(
        <Container style={styles.Contenedor}>
           
           <FlatList
             data = {top.items}
             keyExtractor={(item) => item.id}
             ListEmptyComponent={<Text>No se han encontrado peliculas</Text>}
             renderItem={({item})=>{
                return (
                    <View>
                        <Card  style={styles.CardContainer} >
                            
                                <CardItem style={styles.CardItem} cardBody>
                                    {console.log(item.images)}
                                   { item.images.map((image)=> (
                                    <Image key={image.id} source={{uri: image.url}} style={styles.topImage}></Image>
                                    ))
                                    }
                                </CardItem>
                           
                            <CardItem style={styles.CardItemText}  >
                                <Body>
                                    <H3 style={styles.Tittle}>
                                        {item.name}
                                    </H3>
                                    <Text style={styles.Porcentaje}>
                                        {item.popularity} %
                                    </Text>

                                   < CardItem style={styles.ButtonCardItem} button onPress={ () => navigation.navigate('WaveAbout',{id: item.id})}>
                                        <Text style={{ color: '#94618e',right:17}} > 
                                            Mas..
                                        </Text>
                                    </CardItem>

                                </Body>
                            </CardItem>

                            
                        </Card>
                    </View>
                )
            }}
            /> 

        </Container>
        
    );
};

const styles = StyleSheet.create
(
    {
        Contenedor:
        {
            
            height: height,
            backgroundColor: '#F4DECB',
        },
        CardItem:
        {
            height:'70%',
            backgroundColor: 'rgba(64,62,62,80)'
        },
        CardItemText:
        {
            height:'30%',
            backgroundColor: 'rgba(64,62,62,80)'
        },


        Tittle:
        {
            color: '#F4DECB',
            fontWeight: 'bold'
        },
        ButtonCardItem:
        {
            position: "relative",
            width: '60%',
            height:'40%',
            left:0,
            backgroundColor: 'rgba(64,62,62,80)'
        },
        Porcentaje:
        {
            color: 'white'
        },
        CardContainer:
        {
           
            left:15,
            width: width *0.91,
            height: height * 0.5
        },

        topImage:
        {

            left: 0,
            right:20,
            width:width *0.81 ,
            height: height * 0.3,
            margin: 20
        }
    }
);

export default TopArtistAndTracks;