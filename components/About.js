import React,{useState,useEffect} from 'react';
import { View, ActivityIndicator, Image, StyleSheet,Text,Button } from 'react-native';
import SearchBar from '../utils/SearchBar';
import Weather from '../utils/Weather';
// import imagefond from './../assets/img/imagefond.jpg';
const API_KEY = "721e6e1f9205d22adf412c4aa34b0740";
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
      margin: 20,
      fontSize: 28
  }, button:{
    backgroundColor:'#6D28D9',
    color:'black',
    width:"100%"
}
})

export default function About({navigation}) {
  const pressHandler = () => {
    navigation.push("Welcome");
    }
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
      setLoaded(false);
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      try {
          const response = await fetch(API);
          if(response.status == 200) {
              const data = await response.json();
              setWeatherData(data);
          } else {
              setWeatherData(null);
          }
          setLoaded(true);
          
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      fetchWeatherData('Pau');
  }, [])
  

  if(!loaded) {
      return (
          <View style={styles.container}>
              <ActivityIndicator color='gray'  size={36} />
          </View>

      )
  }

  else if(weatherData === null) {
      return (
          <View style={styles.container}>
              <SearchBar fetchWeatherData={fetchWeatherData}/>
              <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
          </View>
      )
  }

  return (
      <View style={styles.container}>
          <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}  />
          <Button title="Accueil" onPress={pressHandler} style={styles.button}/>
      </View>
  );
}





