import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3, Body, Content, List, ListItem, Thumbnail,Left, Right
        } from "native-base";

import backend from "../api/backend";

/**
 *                                <CardItem cardBody>
                                    {console.log(item.images)}
                                   { item.images.map((image)=> (
                                    <Image key={image.id} source={{uri: image.url}} style={styles.topImage}></Image>
                                    ))
                                    }
                               </CardItem>
                            
                                <Body>
                                    
                                </Body>
 */


// Valores del destructing
const {width, height} = Dimensions.get("window");

const TopArtistAndTracks = ({route, navigation}) =>
{
    const { artistId } = route.params;
    console.log("Id Artist:",artistId);

 //Estados
 const [artistInformacion, setArtistInformacion] = useState(null);
 const [error, setError] = useState(false);
 const[album, setAlbum]=useState("");


 //Promesa para informacion basica del artista
 const getArtistInformacion = async () =>  {
     try {
         //Consulta a la api
         const response = await backend.get(`artists?ids=6jJ0s89eD6GaHleKKya26X`);
         
         
         
         setArtistInformacion(response.data);
         
     } catch (error) {

         setError(true);
         console.log(error);
     }
 }
 
 const getAnAlbum = async () =>  {
    try {
        //Consulta a la api
        const response = await backend.get(`artists/6jJ0s89eD6GaHleKKya26X/albums?include_groups=single%2Calbum&market=ES&limit=50&offset=0`);
        
        
        console.log(response.data);
        setAlbum(response.data);
        
    } catch (error) {

        setError(true);
        console.log(error);
    }
}



 //hook de efecto
 useEffect(() =>
 {
     console.log("Haciendo promesa");
     getAnAlbum();
     getArtistInformacion();
 },[]);

 if (!artistInformacion) {
     return (
       <View style={{flex: 1, justifyContent: "center"}}>
         <Spinner color="blue" />
       </View>
     )
   }


 const { token } = route.params;

 return(
     <Container style={{flex:1, backgroundColor:"blue"}} >
         
         <FlatList style={{height:300}}
          data = {artistInformacion.artists}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No se han encontrado peliculas</Text>}
          renderItem={({item})=>{
             return (
                 <View style={{flex:0.1, backgroundColor:"yellow",flexDirection:"row"}}>
                            
                            
                                 <H1 style={{ left:25,top:14,width:100}} >
                                     {item.name}
                                 </H1>
                             

                                 {console.log(item.images)}
                                { item.images.map((image)=> (
                                    
                                 <Image key={image.id} source={{uri: image.url}} style={ styles.topImage}></Image>
                                 ))
                                 }
                            
                         
                             
                         
                     
                 </View>
             )
         }}
         />
        
         <FlatList style={{ backgroundColor:"yellow"}}
            data={album.items}
            keyExtractor={(item)=>item.id}
            ListEmptyComponent={<Text>No se han encontrado albumes</Text>}
            renderItem={({item})=>{
                return (
                    <Container style={{backgroundColor:"red" ,height:130}} >
                        
                            <Content >
                                <List  >
                                    <ListItem thumbnail style={{width:500}}>
                                        <Left>
                                        { 
                                        item.images.map((image)=> (
                                        <Thumbnail key={image.id} square source={{uri: image.url}  } style={{right:120}} />
                                         ))
                                         }
                                         </Left>
                                        <Body style={{right:120, width:800}} >
                                        <H3>
                                            {item.name}
                                        </H3>
                                        <Text note numberOfLines={1}>
                                            {item.album_group}
                                        </Text>
                                        </Body>                                          
                                    </ListItem>
                                </List>
                            </Content>
                        
                    </Container>
                )
            }}
         />

     </Container>
     
 );
};

const styles = StyleSheet.create
(
    {
        CardItem:
        {
            left:15,
            width: width *0.91,
            height: height * 0.5
        },

        topImage:
        {
            left: 100,
            right:90,
            width:width *0.41 ,
            height: height * 0.2,
            margin: 20
        }
    }
);

export default TopArtistAndTracks;