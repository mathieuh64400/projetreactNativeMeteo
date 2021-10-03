
import React, {useState, useEffect} from 'react';
import * as Location from 'expo-location';
    
export default function useLocation() {
    //etat courant et  fct  pour setloading set error et setResult
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  try {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location) ; 
  } catch (error) {
      console.log(error);
      
  }
  })();
}, []);
       
  
   
    //UseWeather retournera un objet 
    return { loading, error, location }


};

  