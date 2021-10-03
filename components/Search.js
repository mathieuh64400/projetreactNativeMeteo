import React, { useState } from 'react';
import { View, Text, TextInput, Image,ImageBackground, StyleSheet,Dimensions } from 'react-native';
// import {MapView,Permissions} from 'expo';
// import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import useCity from '../Hook/usecity.js';
import List from './List.js';
export default function App() {

  const image={ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa0jFhCP42j6JyYLC0vh3EvMwr-4BRCt5d9W3uf9ckpRgIfXQGNKvTYz3shPfdlnDU-M&usqp=CAU" };

  // const [mapRegion, setmapRegion] = useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });

  const [text, setText] = useState('');
  // const [mapRegion, setMapRegion] = useState({latitude:43.194413,
  // longitude:-0.605292});
  const {loading, error, result}=useCity(text)
//  const imageURL='';
  return (
   
    <View> <ImageBackground source={image} resizeMode="cover"style={styles.image}>
      <View style={styles.container}>
            <Text> Sur une carte, vous etes situé :</Text>
            {/* <MapView style={{flex:2}}>

            </MapView> */}
            {/* <MapView
            provider={PROVIDER_GOOGLE}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={{mapRegion}}
      /> */}
           
            {/* <MapView style={{alignSelf:'stretch',height:'33%'}} region={mapRegion}>
              <Marker coordinate={mapRegion}>
                    <Image source={{uri:imageURL}}/>

              </Marker>
            </MapView> */}
        </View>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder=" Nom de ville "
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{ fontSize: 24,color:'white',marginLeft:'5%' }}>
        Vous avez écrit : {text}
      </Text>

      {result && <List result={result}/>}
      
      <Text style={{ fontSize: 24, marginTop:'120%' }}> Le temps se trouvera en page d'acceuil</Text>
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
  },
// map:{
//   width:Dimensions.get('window').width/3,
//   height:Dimensions.get('window').height/3
// }
})
