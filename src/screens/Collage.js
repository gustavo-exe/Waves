/**
 * This scrreen generate a collage with top 10 of songs from spotify account
 */
import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList} from "react-native";
import  { Container, Spinner,} from "native-base";
import backend from "../api/backend";

// Valores del destructing
const {width, height} = Dimensions.get("window");

const Collage = ({route, navigation}) =>
{
    //Vatiables con hook de cambio de estado
    const [top, setTop] = useState(null);
    const [error, setError] = useState(false);

    
    const getTop = async () =>  {
    /*
        Get User's Top Artists and Tracks
        Las primeras 15 canciones mas escuchdas en los ultimos 6 meses
    */
        try {
            const response = await backend.get(`me/top/tracks?time_range=medium_term&limit=15&offset=0`);
            setTop(response.data);
            //console.log(top.items.name);
            
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }
    
//Hook de efecto
    useEffect(() =>
    {
        getTop();
    },[]);


//Comrpbamos que este lleno de contenido
    if (!top) {
        return (
          <View style={styles.viewSpinner}>
            <Spinner color="blue" />
          </View>
        )
      }
/**
* Asi imrprimo un item en JSX
* { {console.log(item.images)}
*/

    return(     

        <View style={styles.container} >
            
            <View style={styles.viewEncabezado} >
                <Text style={styles.textUser} >
                User's Top
                </Text>
                <Text style={styles.textTracks} >
                    Tracks
                </Text>
            </View>
           

            <View style={styles.viewContainerCollage} >
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                    data = {top.items}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text>I'cant found songs. </Text>}
                    renderItem={({item})=>{
                    return (

                    
                            <View style={styles.viewaOnlyTrack}>
                                
                                <View style={styles.viewImage}  >   
                                { 
                                
                                        item.album.images.map((image)=> 
                                        <Image key={image.id} source={{uri: image.url}} style={styles.image} ></Image>
                                        
                                        )
                                }

                                <Text numberOfLines={1} style={styles.songName} >{item.name}</Text>
                                </View>

                            </View>
                    )
                }}
            />
         </View>
            <View style={styles.viewCredits} >
            <Text style={styles.textCredits} >
                    Source Spotify Api do it with Waves
                </Text>
            </View>

        </View>
        
    );
};

//Variables de estilo

const styles = StyleSheet.create
(
    {
        viewSpinner:
        {
            flex: 1, 
            justifyContent: "center"
        },
        container:
        {
            flex:1 ,
            backgroundColor:'#49274A'
        },

        viewEncabezado:
        {
            justifyContent:'center',
            marginLeft:'8.7%',
            marginRight:'8.7%',
            top:'0%',
            alignSelf:'stretch',
            flex:0.2
        },

        textUser:
        {
            top:'15%',marginBottom:10 ,
            color:'#F4DECB'
        },

        textTracks:
        {
            fontSize:45, color:'#F4DECB'
        },

        viewContainerCollage:
        {
            flex:0.85,left:0 ,
            alignItems:"center",
            backgroundColor:'blue',
        
            margin:'0%'
        },

        viewaOnlyTrack:
        {
            position:'relative',
            backgroundColor:'pink',
            margin:-1 ,
            height:height*0.14, 
            width:width*0.28
            
        },

        viewImage:
        {
            margin:'0%',
            position:'relative',
            width:'100%', 
            height:'100%'
        },

        image:
        {
            position:'relative',
            margin:0,
            width:'100%',
            height:'100%'
        },

        songName:
        {
            color:'#F8EEE7',
            textShadowOffset:{width:0 ,height:1}, 
            elevation:0, 
            textShadowColor:'#000000',
            textShadowRadius:3, 
            shadowOpacity:5,
            bottom:'3%',
            margin:'0%',
            width:'100%',
            left:'4%',
            fontSize:10,
            position:'absolute'
        },
        viewCredits:
        {
            alignItems:'center' ,
            justifyContent:'flex-start',
            marginLeft:'8.7%',
            marginRight:'8.7%',
            alignSelf:'stretch',
            flex:0.1
        },
        textCredits:
        {
            color: 'rgba(248,238,231,0.3)'
        }

    }
)

export default Collage;