/**
 * This scrreen generate a collage with top 10 of songs from spotify account
 */

import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList, ImageBackgroundBase, ImageBackground } from "react-native";
import  {   Input,  Container,  Item,  H1,  Button,
            Header,  Icon,  Spinner,  Card,  CardItem,
            H3, Body, Right
        } from "native-base";
import backend from "../api/backend";
import { Col, Row, Grid } from 'react-native-easy-grid';
// Valores del destructing
const {width, height} = Dimensions.get("window");

const Collage = ({route, navigation}) =>
{
    const [top, setTop] = useState(null);
    const [error, setError] = useState(false);
    //const [itemId, setItemId] = useState(null);
    const [search, setSearch] = useState("");

    //Promesa
    const getTop = async () =>  {
        //console.log("Asincrona");
        try {
            //Consulta a la api
            const response = await backend.get(`me/top/tracks?time_range=medium_term&limit=15&offset=0`);
            
            //console.log("Estas aqui");
            //console.log(response.data);
            setTop(response.data);
            //console.log(top.items.name);
            
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }
    
/*
  const handlerSearch = () => {
    if (!search) setSearchError(true);
    else {
      navigation.navigate('SearchArtist',{search});
      setSearch(" ");
    }
  };
*/
    //hook de efecto
    useEffect(() =>
    {
        getTop();
    },[]);


//Comrpbamos que este lleno de contenido
    if (!top) {
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

        <Container style={{flex:1 ,backgroundColor:'#49274A'}} >
            
            <View style={{ justifyContent:'center',marginLeft:'8.7%',marginRight:'8.7%',top:'0%',alignSelf:'stretch',flex:0.2}} >
                <Text style={{top:'15%', color:'#F4DECB'}} >
                User's Top
                </Text>
                <Text style={{fontSize:45, color:'#F4DECB'}} >
                    Tracks
                </Text>
            </View>
           

            <Container style={{flex:1,left:0 ,alignItems:"center",backgroundColor:'#49274A',borderRadius:20 ,margin:'0%'}} >
            <FlatList
                numColumns={3}

                data = {top.items}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>I'cant found artists. </Text>}
                renderItem={({item})=>{
                return (

                   
                        <View  style={{backgroundColor:'blue',margin:-1 ,height:height*0.14, width:width*0.28}}>
                            
                            <View style={{margin:'0%',position:'relative' ,width:'100%', height:'100%'}}  >   
                            { 
                            
                                    item.album.images.map((image)=> 
                                    <Image key={image.id} source={{uri: image.url}} style={{ position:'relative',margin:0 ,width:'100%',height:'100%'}} ></Image>
                                    
                                    )
                            }

                            <Text numberOfLines={1} style={{ color:'#F8EEE7' ,textShadowOffset:{width:0 ,height:1}, 
                                elevation:0, 
                                textShadowColor:'#000000',
                                textShadowRadius:3, 
                                shadowOpacity:5 ,bottom:'3%' ,margin:'0%' ,width:'100%' ,left:'4%' ,fontSize:10 ,position:'absolute'}} >{item.name}</Text>
                            </View>

                        </View>
                    
                    

                )
            }}
        />
         </Container>
            <View style={{alignItems:'center' ,justifyContent:'flex-start',marginLeft:'8.7%',marginRight:'8.7%',alignSelf:'stretch',flex:0.1}} >
            <Text style={{ color: 'rgba(248,238,231,0.3)' }} >
                    Source Spotify Api do it with Waves
                </Text>
            </View>

        </Container>
        
    );
};


/*


                       <View
                        style={{width:100, height:1000}}
                        data = {top.items}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={<Text>I'cant found artists. </Text>}
                        renderItem={({item})=>{
                        return (
                            <Text>hola</Text>

                        )
                        }}
                        />
 <FlatList
            
             data = {top.items}
             keyExtractor={(item) => item.id}
             ListEmptyComponent={<Text>I'cant found music. </Text>}
             renderItem={({item})=>{
*/
export default Collage;