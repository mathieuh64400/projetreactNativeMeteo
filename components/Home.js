import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import useWheather from '../Hook/useWheather.js';
import { useRoute } from '@react-navigation/native'
import useLocation from '../Hook/useLocation.js';
import Navbar from "./Navbar.js";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";



const Home = ({navigation}) => {
  // objet contenant la géo
  const {location}=useLocation();


  const route = useRoute();
 

   const [search, setSearch] = useState(`${location?.coords.latitude}, ${location?.coords.longitude}`);
   const {loading, error, result}= useWheather(search);
    
useEffect(()=>{
  if(route.params){
    setSearch(route.params?.param.name);
  
   }else{
     setSearch(`${location?.coords.latitude}, ${location?.coords.longitude}`);
   }console.log(" result ", result);
   console.log( " ", );
   console.log( "route", route);
},[location]);

    // const image={ uri: "http://mourirmoinscon.com/images/2019/07/03/ciel-bleu-bd.jpg" };
    // const fond={uri:"../assets/imagefond.jpg"};

    return (
        
     <View style={styles.weatherContainer}>
        
        <View style={styles.container}> 
        {/* <StatusBar backgroundColor='red' barStyle='light-content'/> */}
       {/* <ImageBackground source={image} resizeMode="cover"style={styles.image}> */}
          <View style={styles.headerContainer}>
            
            <TouchableOpacity
              style={styles.repartition}
              title="search"
              activeOpacity={0.7}
             onPress={() => {navigation.push("Search")
            }}
            > <Ionicons name="help" size={32} color="white"/>
              <Text style={styles.navtext}>Search </Text>  
            </TouchableOpacity>

           
             </View>
         
          <View style={styles.bodyContainer}>
            <View style={styles.cadre}>
         <Text style={styles.info}>  Les Informations Météorologiques demandées:</Text> 
            {loading && <Text> En attente...</Text>}
            <Text style={styles.subtitle}> Place:{result && <Text > {result.location.name}</Text>}</Text>
             
             <Text style={styles.subtitle}>  The Weather : 
            {result && <Text>{result.current.condition.text}</Text>}</Text>
            
            <Text style={styles.subtitle}> Date: 
             {result && <Text >{result.location.localtime}</Text>}</Text> 

             <Text style={styles.subtitle}> Temperature : 
             {result && <Text >{result.current.temp_c}°C</Text>} </Text>
              </View>
          </View>
           
            {/* <Text style={styles.subtitle}> la température actuelle de la journée est la suivante: </Text>
             {result && <Text style={styles.tempsText}>{result.current.temp_c}°C</Text>}  */}
             {/* <Image source={image} style={styles.image}/> */}
            {/* {uri:result.current.condition.icon} */}
            {/* </ImageBackground> */}
             </View> 
        
        
     

        <View style={styles.repartionBoutton}>
             <TouchableOpacity
              style={styles.button}
              title="Accueil"
              activeOpacity={0.7}
              onPress={() => {navigation.push("Welcome");
         }}>
                 <Text style={styles.text}>Mention legale</Text>
            </TouchableOpacity>

            
    
            
        </View>
    </View>
    
    );
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        width:'100%' ,
        backgroundColor:"black"
    },cadre:{marginTop:"-50%"},
    navtext:{
      fontSize: 15,
      color:'white'
    },info:{fontWeight:"bold",fontSize:15,marginBottom:"15%",marginLeft:"-2%"},
    tempText: {
        fontSize: 48,
        color: '#fff'
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
       marginTop:'2%',
        backgroundColor:'transparent',
        opacity:'66%',
        width:'100%',
        
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 25,
        marginTop:"-50%",
        backgroundColor:"bleu",
        border:"solid 1px red",
        width:"100%"
    },
    title: {
        fontSize: 48,
        color: 'white'
    },
    subtitle: {
        fontSize: 25,
        color: 'white',
        marginRight:'10%'
    },
    image: {
      flex:1,
      justifyContent:"center"
    }
    , container: {
        flex: 10,
       
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
        bottom:0,
        flex:1,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'blue',
      }, text: {
        fontSize: 18,
        padding: 12,
        textAlign:"center"
      },
      backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
      repartionBoutton:{
        flex:2
      },
     repartition:{
      flex:2,
      height:0.5,
      color:'white',
      paddingTop:'-10%',
      marginLeft:'5%',
      zIndex:2,
      marginTop:'-25%',
      
     }, tempsText:{
       fontSize:25
     }
});
export default Home;