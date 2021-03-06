import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList } from "react-native";
import  {   Container,  Spinner,  
            Card,  CardItem,
            H3, Body
        } from "native-base";

import backend from "../api/backend";

// Valores del destructing
const {width, height} = Dimensions.get("window");

const ArtistSearchResult = ({route, navigation}) =>
{
    const {search} = route.params;
    const [artist, setartists] = useState(null);
    const [error, setError] = useState(false);

    const getArtists = async () =>  {

        try {
            /*
                Search for an Item
                En este caso buscamos los artistas relacionados con el parametro de busqeda.
            */
            const response = await backend.get(`search?q=${search}&type=artist&market=US&limit=10&offset=0`);
            //console.log(response.data.artists.limit);
            setartists(response.data.artists);
           
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }

    //hook de efecto
    useEffect(() =>
    {
        getArtists();
    },[]);


//Comrpbamos que este lleno de contenido
    if (!artist) {
        return (
          <View style={{flex: 1, justifyContent: "center"}}>
            <Spinner color="blue" />
          </View>
        )
      }
      /**
       * Asi imrprimo un item en JSX
       * { {console.log(item.images)}
       */

    return(
    <Container style={{backgroundColor:'#49274A', flex:1}}>
           
          
           <View style={{alignItems:'center',top:'1%' ,justifyContent:'center',alignSelf:'stretch',flex:0.1 ,width:width ,backgroundColor: '#49274A'}}>

                <Text style={{fontSize:10, color:'#F4DECB'}} >Search</Text>
                <Text style={{fontSize:30, color:'#F4DECB'}} > {search}  </Text>
            </View>
          

        <Container style={{borderRadius:20,backgroundColor: '#F4DECB', top:'5%'}}>
           <FlatList style={styles.flatList}
             data = {artist.items}
             keyExtractor={(item) => item.id}
             ListEmptyComponent={ <Text style={{fontSize:30 ,color:'red'}}> Can't find elements  </Text>}
             renderItem={({item})=>{
                return (
                    
                    <View>
                        
                        <Card  style={styles.CardContainer} >
                            
                                <CardItem style={styles.CardItem} cardBody>
                                { 
                                    item.images.map((image)=> 
                                    <Image key={image.id} source={{uri: image.url}} style={styles.topImage}></Image>
                                    )
                                }
                                </CardItem>
                           
                            <CardItem style={styles.CardItemText}  >
                                <Body>

                                    <H3 style={styles.Tittle}>
                                        {item.name}
                                    </H3>
                                    
                                    <Text style={styles.Porcentaje}>
                                        {item.popularity}%
                                    </Text>

                                   < CardItem style={styles.ButtonCardItem} button onPress={ () => navigation.navigate('WaveAbout',{id: item.id})}>
                                        <Text style={{ color: '#94618e',left:'-100%'}} > 
                                            More...
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
    </Container>
        
    );
};

const styles = StyleSheet.create
(
    {
        resultsOf:
        {
            
            top:'25%',
            color:'#F4DECB',
            fontSize:30
        },
        colorIconSearch:
        {
            color:"white"
        },
        textInputSearch:
        {
            color: 'white'
        },
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
            left:'0%',
            height:'30%',
            backgroundColor: 'rgba(64,62,62,80)'
        },


        Tittle:
        {
            left:0,
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
        },
        
        flatList:
        {
            marginBottom:'12%', 
            marginTop:'0%'
        }
    }
);

export default ArtistSearchResult;