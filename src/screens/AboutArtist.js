import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground, Alert } from "react-native";
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
    const { id } = route.params;
    

 //Estados
 const [artistInformacion, setArtistInformacion] = useState(null);
 const [error, setError] = useState(false);
 const[album, setAlbum]=useState("");
 const [track, setTrack]=useState("");

 const[AnAlbumTracks, setAnAlbumTracks] = useState("");

 const [idAlbum, setIdAlbum] = useState("4aawyAB9vmqN3uQ7FjRGTy");

 //Promesa para informacion basica del artista
 const getArtistInformacion = async () =>  {
     try {
         //Consulta a la api
         const response = await backend.get(`artists?ids=${id}`);
         
         
         
         setArtistInformacion(response.data);
         
     } catch (error) {

         setError(true);
         console.log(error);
     }
 }
 
 //Promesa del album
 const getAnAlbum = async () =>  {
    try {
        //Consulta a la api
        const response = await backend.get(`artists/${id}/albums?include_groups=single%2Calbum&market=ES&limit=50&offset=0`);
        
        
        
        setAlbum(response.data);
        
    } catch (error) {

        setError(true);
        console.log(error);
    }
}


//Obetener un Album's Tracks
const getAnAlbumTracks = async () =>  {
    try {
        //Consulta a la api
        const response = await backend.get(`albums/${idAlbum}/tracks?market=ES&limit=50&offset=0`);
        
        
        console.log(response.data);
        setAnAlbumTracks(response.data);
     
    } catch (error) {

        setError(true);
        console.log(error);
    }
}

 //hook de efecto
 useEffect(() =>
 {
     getAnAlbumTracks();
     getAnAlbum();
     getArtistInformacion();
 },[]);

 if (!artistInformacion) {
     return (
       <View style={{flex: 1, justifyContent: "center"}}>
         <Spinner color="black" />
       </View>
     )
   }


/*Alt + shift + a: para comentar las lineas seleccionadas*/

 function  AlertTrackList(idAlbum)
   {
        console.log(idAlbum);
/*         setIdAlbum(idAlbum);
        getAnAlbumTracks();
        
        
        AnAlbumTracks.items.forEach((element) => {setTrack(`\n${element.name}`)});
        
        
        console.log(track);
        Alert.alert("Tracks", `${track.name}`);
        console.log(track);
        setTrack("");
        setIdAlbum("");
           */
       
    }


 const { token } = route.params;

 return(
<Container style={{flex:1 ,backgroundColor: "#F4DECB"}} >
         
         <FlatList style={{height:300}}
          data = {artistInformacion.artists}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No se han encontrado peliculas</Text>}
          renderItem={({item})=>{
             return (
                 <View style={{flex:0.1, backgroundColor:"#F4DECB",flexDirection:"row"}}>
                            
                            
                                 <H1 style={{ backgroundColor:'blue',left:'10%',top:'7%',height:'80%',width:"45%"}} >
                                     {item.name}
                                 </H1>
                             

                           
                                { item.images.map((image)=> (
                                    
                                 <Image key={image.id} source={{uri: image.url}} style={ styles.topImage}></Image>
                                 ))
                                 }
                 </View>
             )
         }}
         />
   
         <FlatList 
            data={album.items}
            keyExtractor={(item)=>item.id}
            ListEmptyComponent={<Spinner color="black" />}
            renderItem={({item})=>{
                return (
                    <Container style={{ marginLeft:'5%', marginRight:'5%' ,backgroundColor:"rgba(64,62,62,80)" ,height:'10%'}} >
                        
                            <Content >
                                <List  >
                                    <ListItem thumbnail style={{width:"100%", height:'45%'}}>
                                        <Left>
                                        { 
                                        item.images.map((image)=> (
                                             
                                        <Thumbnail key={image.id} square source={{uri: image.url}  } style={{ position:"absolute", top:'100%' ,bottom:'5%' }} />
                                         ))
                                         }
                                         </Left>
                                        <View  style={{left:70, width:'60%', height:'100%', bottom:'0%', top:'5%'}} >
                                            
                                            <Text note numberOfLines={1} style={{color: '#F4DECB', fontWeight: 'bold' ,width:'95%'}} >
                                                {item.name}
                                            </Text>

                                            <Text note numberOfLines={1}>
                                                {item.album_group}

                                            </Text>
                                        </View>
                                      
                                        <View style={{ backgroundColor:'blue',left:70,height:80,width:'14%' , top:'10%', bottom:'80%'}} />
                       
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


/**
 *                                            <Button style={{position:'absolute',left:'100%',height:60,width:40 ,top:'60%',bottom:'40%' ,backgroundColor:'blue'}} icon onPress={()=> {AlertTrackList(item.id)}}>
                                            <Text style={{color:'white', fontWeight: 'bold' }} >{`...`}</Text>
                                            </Button>
 */

//style={{flex:0.1 ,left:'5%', right:'5%',height:'10%',width:'10%', position:'relative',top:'100%',bottom:'40%' ,backgroundColor:"rgba(64,62,62,80)"}}
//setIdAlbum({id: item.id}) ;
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
            shadowOpacity:0.3,
            shadowRadius:100,
            shadowOffset:{height:0, width:0},  
            left:'10%',
            width:width *0.41 ,
            height: height * 0.2,
            top:'2%',
            margin: '5%'
        }
    }
);

export default TopArtistAndTracks;