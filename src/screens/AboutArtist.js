import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground, Alert } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3, Body, Content, List, ListItem, Thumbnail,Left, Right
        } from "native-base";

import backend from "../api/backend";
import { ScrollView } from "react-native-gesture-handler";

// Valores del destructing
const {width, height} = Dimensions.get("window");

const TopArtistAndTracks = ({route, navigation}) =>
{
    const { id } = route.params;
    

 //Estados
 const [artistInformation, setArtistInformation] = useState(null);
 const [error, setError] = useState(false);
 const  [album, setAlbum]=useState("");
 const [track, setTrack]=useState([]);

 const[anAlbumTracks, setAnAlbumTracks] = useState("");

 const [idAlbum, setIdAlbum] = useState("");

 // Get Several Artists
 //https://developer.spotify.com/documentation/web-api/reference/artists/get-several-artists/

 //Promesa para informacion basica del artista
 const GetArtistInformation = async () =>  {
     try {
         //Consulta a la api
         const response = await backend.get(`artists?ids=${id}`);

         setArtistInformation(response.data);
    
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
     GetArtistInformation();
 },[]);

/*Alt + shift + a: para comentar las lineas seleccionadas*/

function  AlertTrackList(idAlbumList)
{
     console.log(idAlbumList);
     setIdAlbum(idAlbumList) ;
     
     
     getAnAlbumTracks();
     

     
     if (!anAlbumTracks)
     {
        Alert.alert("cargando datos");
     }else{

        //console.log(AnAlbumTracks);
         
        anAlbumTracks.items.forEach((element) => {track.push(`\n${element.name}`);});
        console.log(track);
         
        setIdAlbum(" ");
        Alert.alert("Tracks", `${track}`);
        setTrack(track.length = 0);
        
     }
    
 }

 if (!artistInformation) {
     return (
       <View style={{flex: 1, justifyContent: "center"}}>
         <Spinner color="black" />
       </View>
     )
   }

 return(
<Container style={styles.container} >
        <View>
         <FlatList
          data = {artistInformation.artists}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No se han encontrado peliculas</Text>}
          renderItem={({item})=>{
             return (
            <Container style={styles.backgroundInformation} >

                 <View style={styles.viewImage}>
                                { 
                                    item.images.map((image)=> (
                                    <Image key={image.id} source={{uri: image.url}} style={ styles.topImage}></Image>
                                    ))
                                 }
                </View>

                <View style={styles.viewItemsText}>
                    <Text style={styles.itemName}>
                        {item.name}
                        </Text>
                    <Text style={styles.itemFollowers}>
                        Followers  {item.followers.total}
                    </Text>
                </View>

                <Container style={styles.containerGenres} >
                        
                        <ScrollView>
                        {
                            item.genres.map((genre)=>(
                            <Text style={styles.textGenres} >{genre}</Text>
                            ))
                        }
                        </ScrollView>
                </Container>

            </Container>
             )
         }}
         />
    </View>
    
    <Container style={styles.containerAlbum} >
         <FlatList style={styles.flatListAlbum}
            data={album.items}
            keyExtractor={(item)=>item.id}
            ListEmptyComponent={<Spinner color="black" />}
            renderItem={({item})=>{
                return (
                    <Container style={styles.containerListAlbum} >
                        
                        <Content >
                            <List  >
                                <ListItem thumbnail style={styles.listItem}>
                                    <Left>
                                    { 
                                    item.images.map((image)=> (
                                         
                                    <Thumbnail key={image.id} square source={{uri: image.url} } style={styles.imageAlbum} />
                                     ))
                                     }
                                     </Left>

                                    <View style={styles.bodyOfList} >
                                        
                                        <Text note numberOfLines={1} style={styles.nameOfAlbum} >
                                            {item.name}
                                        </Text>

                                        <Text note numberOfLines={1} style={styles.albumGroup} >
                                            {item.album_group}

                                        </Text>
                                       
                                    </View> 
                                    <View style={styles.viewOfBottomAlert}>
                                        <Button style={styles.bottomAlert} onPress={()=> {AlertTrackList({id: item.id}) ;}}>
                                            <Text style={styles.textBottomAlert} > . . .</Text>
                                        </Button>
                                    </View>
                                </ListItem>
                            </List>
                        </Content>
                    
                </Container>
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
        container:
        {
            backgroundColor:'#49274A',
             flex:1
        },
        backgroundInformation:
        {
            backgroundColor:'#49274A',
            height:height * 0.40 
        },
        albumGroup:
        {
            position:"relative",
            textTransform:'capitalize'
        },
        viewImage:
        {
            flex:0.4 ,
            backgroundColor:'#49274A',
            flexDirection:"row"
        },
        viewItemsText:
        {
            position:'absolute', 
            alignItems:'center',
            width:width*0.98, 
            top:'67%'
        },
        itemName:
        {
            fontSize:30,
            textShadowOffset:{width:0 ,height:3}, 
            elevation:0, 
            textShadowColor:'#000000',
            textShadowRadius:7, 
            shadowOpacity:1.0  ,
            color:"#F4DECB"
        },
        itemFollowers:
        {
            bottom:'6%', 
            fontSize:12,
            textShadowOffset:{width:0 ,height:1}, 
            elevation:0, 
            textShadowColor:'#000000',
            textShadowRadius:4, 
            shadowOpacity:1.0  ,
            color:"#F4DECB"
        },
        containerGenres:
        {
            position:'absolute', 
            width:'50%',
            height:'40%',
            backgroundColor:'transparent' ,
            left:'4%'
        },
        textGenres:
        {
            color:'#F8EEE7', 
            textTransform:"capitalize",
            textAlign:"left", 
            textShadowOffset:{width:0 ,height:1}, 
            elevation:0, 
            textShadowColor:'#000000',
            textShadowRadius:7, 
            shadowOpacity:1.0
        },
        topImage:
        {
           
            position:'relative',
            width:width ,
            height: height * 0.40,
            top:'0%',
            left:'0%'
        },


        containerAlbum:
        {
            top:height*0.35,
            position:'absolute', 
            width:width ,
            backgroundColor:'#49274A',
            borderTopRightRadius:30,
            borderTopLeftRadius:30
        },
        flatListAlbum:
        {
            marginTop:'1%',
            marginBottom:'82%'
        },
        containerListAlbum:
        {
            marginLeft:'5%', 
            marginRight:'5%',
            backgroundColor:'#49274A',
            height:'10%'
        },
        listItem:
        {
            width:"100%", 
            height:'45%'
        },

        imageAlbum:
        {
            position:"absolute", 
            top:'100%',
            bottom:'5%' 
        },

        bodyOfList:
        {
            backgroundColor:'blue',
            left:70, 
            width:'60%', 
            height:'700%', 
            bottom:'0%', 
            top:'9%'
        },

        nameOfAlbum:
        {
            position:'relative',
            color: '#F4DECB', 
            fontWeight: 'bold' ,
            width:'95%'
        },
        viewOfBottomAlert:
        {
            left:'900%',
            height:80,
            width:'14%', 
            top:'10%', 
            bottom:'80%'
        },
        bottomAlert:
        {
            left:'3%',
            width:'90%', 
            borderBottomWidth:0,
            shadowOffset: {height: 0, width: 0}, 
            shadowOpacity: 0, 
            elevation: 0  ,
            backgroundColor:'#49274A'
        },
        textBottomAlert:
        {
            color:'white', 
            fontWeight: 'bold' 
        },
        CardItem:
        {
            left:15,
            width: width *0.91,
            height: height * 0.5
        }
    }
);

export default TopArtistAndTracks;
