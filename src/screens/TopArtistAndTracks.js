/**
 * Modulos necesarios
 */
import React , {useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Dimensions,FlatList } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3,  Body
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

    //Promesa
    const getTop = async () =>  {
        console.log("Asincrona");
        try {
            //Consulta a la api
            const response = await backend.get(`me/top/artists?time_range=medium_term&limit=10&offset=5`);
            
            console.log("Estas aqui");
            console.log(response.data);
            setTop(response.data);
            
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }
    
    //hook de efecto
    useEffect(() =>
    {
        console.log("Haciendo promesa");
        getTop();
    },[]);

    if (!top) {
        return (
          <View style={{flex: 1, justifyContent: "center"}}>
            <Spinner color="blue" />
          </View>
        )
      }


    const { token } = route.params;

    return(
        <Container>
            
            <FlatList
             data = {top.items}
             keyExtractor={(item) => item.id}
             ListEmptyComponent={<Text>No se han encontrado peliculas</Text>}
             renderItem={({item})=>{
                return (
                    <View>
                        <Card>
                            
                                <CardItem cardBody>
                                    {console.log(item.images)}
                                   { item.images.map((image)=> (
                                    <Image key={image.id} source={{uri: image.url}} style={styles.topImage}></Image>
                                    ))
                                    }
                                </CardItem>
                            <CardItem>
                                <Body>
                                    <H3>
                                        {item.name}
                                    </H3>
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
        topImage:
        {
            width: width *0.99,
            height: height * 0.5
        }
    }
);

export default TopArtistAndTracks;