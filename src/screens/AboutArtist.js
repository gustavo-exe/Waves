import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground, Alert } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3, Body, Content, List, ListItem, Thumbnail,Left, Right
        } from "native-base";

import backend from "../api/backend";
import { ScrollView } from "react-native-gesture-handler";

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

 const [idAlbum, setIdAlbum] = useState("");

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
        const response = await backend.get(`albums/${idAlbum.id}/tracks?market=ES&limit=50&offset=0`);
        
        
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

 function  AlertTrackList(idAlbumList)
   {
        setIdAlbum("");
        console.log(idAlbumList);
        setIdAlbum(idAlbumList) ;
        
        
        getAnAlbumTracks();
        
        let track ="";
        
        if (!AnAlbumTracks)
        {
            return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <Spinner color="black" />
            </View>
            )
        }else{

            //console.log(AnAlbumTracks);
            setIdAlbum("");
            AnAlbumTracks.items.forEach((element) => {track = track +`\n${element.name}`});
            console.log(track);
            Alert.alert("Tracks", `${track}`);
            track="";
           
        }
       
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
                 <Container style={{backgroundColor:'white', height:'0%' }} >
                 <View style={{flex:0.3,backgroundColor:"#F4DECB",flexDirection:"row"}}>
                                { 
                                    item.images.map((image)=> (
                                    <Image key={image.id} source={{uri: image.url}} style={ styles.topImage}></Image>
                                    ))
                                 }
                 <View style={{ height:'70%',width:'50%' ,left:'24%' ,top:'2%' ,backgroundColor:"#F4DECB",flexDirection:"row"}}>
                                
                 <Text style={{fontSize:10, top:'80%',right:'319%'}}>Followers</Text>
                                <Text style={{  right:'362%', top:'77%'}}>
                                {"\n"} {item.followers.total}
                                </Text>
                                 
                 </View>
                 <View style={{  backgroundColor:"rgba(64,62,62,100)",position:"absolute", width:'45%' ,height:'90%', left:'5%',top:'3.7%'}} >
    
                    <H1 style={{  color:"#F4DECB",left:'10%',top:'0%',height:'50%',width:"95%"}} >
                    {item.name}
                    </H1>
                    <Container  style={{ backgroundColor:"#F4DECB", bottom:'2%' ,width:'96%' ,left:'2%'}} >
                        <Text>Generos:</Text>
                        <ScrollView  >
                        {
                            item.genres.map((genre)=>(
                            <Text>{genre}</Text>
                            ))
                        }
                        </ScrollView>
                    </Container>
             
 </View>



                </View>
             </Container>
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
                                    <View style={{left:70, width:'60%', height:'100%', bottom:'0%', top:'5%'}} >
                                        
                                        <Text note numberOfLines={1} style={{color: '#F4DECB', fontWeight: 'bold' ,width:'95%'}} >
                                            {item.name}
                                        </Text>

                                        <Text note numberOfLines={1}>
                                            {item.album_group}

                                        </Text>
                                       
                                    </View> 
                                    <View style={{left:70,height:80,width:'14%' , top:'10%', bottom:'80%'}} />
                                        <Button style={{position:"absolute" ,left:'80%',height:'80%',width:'10%' ,top:'20%',bottom:'40%' ,backgroundColor:"rgba(64,62,62,80)"}} onPress={()=> {AlertTrackList({id: item.id}) ;}}>
                                        
                                    <Text style={{color:'white', fontWeight: 'bold' }} >{` . . . `}</Text>
                                        </Button>
                                    
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

//style={{left:'10%',height:'50%',width:'70%' ,top:'20%',bottom:'40%' ,backgroundColor:"rgba(64,62,62,80)"}} onPress={()=> {setIdAlbum({id: item.id}) ; AlertTrackList(true) ;}}
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
            left:'-3%',
            width:width *0.41 ,
            height: height * 0.2,
            top:'-2%',
            margin: '5%'
        }
    }
);

export default TopArtistAndTracks;