import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground,Button } from 'react-native';
import Datetime from '../utils/Datetime';
import WeatherScroll from '../utils/WeatherScroll';
const API_KEY = "721e6e1f9205d22adf412c4aa34b0740";
export default function Prevision({navigation}) {

  const pressHandler = () => {
    navigation.push("Welcome");
    }
  const image=require('./../assets/img/imagefond.jpg');
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((sucess)=>{
      let {latitude,longitude} =sucess.coords;
      fetchDataFromApi(latitude,longitude);
    },(err)=>{
      if(err){
        fetchDataFromApi("40.7128","740060");
      }
    })
    // (async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status !== 'granted') {
    //     fetchDataFromApi("40.7128", "-74.0060")
    //     return;
    //   }

    //   let location = await Location.getCurrentPositionAsync({});
    //   fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    // })();
  }, []);
  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data);
       setData(data)
      })
    }}
  return (
    
    <View style={styles.headerContainer}>
       <ImageBackground source={image} resizeMode="cover"style={styles.image}>
     
      <Datetime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
      <WeatherScroll weatherData={data.daily}/>
      <Button title="Accueil" onPress={pressHandler} style={styles.button}/>
      </ImageBackground>
    </View>
  )

}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent:"center",
    height:'100%'
  },
  TextInput:{
    fontSize:24
  }, container: {
    flex: 1,
  },headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
   marginTop:'2%',
    backgroundColor:'transparent',
    width:'100%',
    height:1,

}
// map:{
//   width:Dimensions.get('window').width/3,
//   height:Dimensions.get('window').height/3
// }
})