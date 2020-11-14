import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3, Body
        } from "native-base";
import {} from "react-native-paper";
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { TouchableOpacity } from "react-native-gesture-handler";

// Valores del destructing
const {width, height} = Dimensions.get("window");

const ArtistSearchResult = ({route, navigation}) =>
{
    const {search} = route.params;
    //console.log(search);
    //Estado del TOP
    const [artist, setartists] = useState(null);
    const [error, setError] = useState(false);
    const [itemId, setItemId] = useState(null);
   

    //Promesa
    const getArtists = async () =>  {
        //console.log("Asincrona");
        try {
            //Consulta a la api
            const response = await backend.get(`search?q=${search}&type=artist&market=US&limit=10&offset=0`);
            
            //console.log("Estas aqui");
            console.log(response.data.artists.limit);
            setartists(response.data.artists);
           //response.artists.map((image)=>{console.log(image)});
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }
    
      // Verifica si el usuario ingresa información en el input de búsqueda

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
           
           <Container style={{flex:0.1, backgroundColor: '#49274A'}} >
           <View style={{  top:'9%',left:'8%' ,width:'80%' ,backgroundColor: '#49274A'}} searchBar rounded>
            
                
                <Text style={styles.resultsOf} >Results of: {search} </Text>
            
            </View>
           </Container>

        <Container style={{borderRadius:20 ,backgroundColor: '#F4DECB', top:'5%'}}>
           <FlatList
             data = {artist.items}
             keyExtractor={(item) => item.id}
             ListEmptyComponent={<Text>No se han encontrado artistas</Text>}
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
        }
    }
);

export default ArtistSearchResult;