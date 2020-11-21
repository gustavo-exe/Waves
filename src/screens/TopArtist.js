/**
 * User's top artist
 */
import React , {useEffect, useState} from "react";
import { StyleSheet,Text, View, Image, Dimensions,FlatList} from "react-native";
import {    Input,  Container,  Item, Button,
            Icon,  Spinner,  Card,  CardItem,
            H3, Body
        } from "native-base";
import backend from "../api/backend";

const {width, height} = Dimensions.get("window");

const TopArtist = ({route, navigation}) =>
{
    //Variables de estado
    const [top, setTop] = useState(null);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState(false);
    //Promesas

    const getTop = async () =>  {
    /*
        Get User's Top Artists and Tracks
        Todos artistas que son 50 porque es el limite en los ultimos 6 meses,
        y sin compensacion
    */
        try {
            
            const response = await backend.get(`me/top/artists?time_range=long_term&limit=50&offset=0`);
            
            setTop(response.data);
            
        } catch (error) {

            setError(true);
            console.log(error);
        }
    }
    

  const handlerSearch = () => {
    if (!search) setSearchError(true);
    else 
    {
      navigation.navigate('SearchArtist',{search});
      setSearch("");
    }
  };

    //hook de efecto
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
    <Container style={styles.contenedor}>

            <View style={styles.encabezadoBusqueda} >
                <Item>
                    <Input  
                        value={search}
                        onChangeText={setSearch} 
                        style={styles.textInputSearch} 
                        placeholderTextColor="#F4DECB" 
                        placeholder="Search" 
                    />

                    <Button icon onPress={handlerSearch} style={styles.colorIconSearch} transparent>
                    <Icon style={styles.iconSearch}  name="ios-search" />
                    </Button>
                </Item>
            </View>
        
        <View style={styles.viewCard}>
           <FlatList style={styles.flatList}
             data = {top.items}
             keyExtractor={(item) => item.id}
             ListEmptyComponent={<Text>I'cant found artists. </Text>}
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
                                        <Text style={styles.textMore} > 
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
        </View>
    </Container>
        
    );
};

const styles = StyleSheet.create
(
    {
        viewSpinner:
        {
            flex: 1, 
            justifyContent: "center"
        },

        contenedor:
        {
            
            backgroundColor:'#49274A', 
            flex:1
        },
        encabezadoBusqueda:
        {
            flex:0.1,
            left:'8%',
            width:'82%',
            backgroundColor: '#49274A'
        },
        
        textInputSearch:
        {
            color: 'white'
        },

        iconSearch:
        {
            color:"#F4DECB"
        },

        colorIconSearch:
        {
            color:"white"
        },
        
        viewCard:
        {
            borderRadius:20, 
            flex:0.9,
            position:'relative',
            backgroundColor: '#F4DECB', 
            top:'5%'
        },
        //
        CardItem:
        {
            height:'70%',
            backgroundColor: 'rgba(64,62,62,80)'
        },
        CardItemText:
        {
            top:-3,
            left:'0%',
            height:'31%',
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
        },

        textMore:
        {
            color: '#94618e',
            left:'-100%'
        }

    }
);

export default TopArtist;