// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Mention from './components/Mention.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Photo from './components/Prevision.js';
import Favori from './components/Favori.js';
// import AddFavori from './components/AddFavori.js';
// import AddFavori from './components/AddFavori.js';
// import { NavigationContainer } from '@react-navigation/native';
// // import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import {launchCamera, launchImageLibrary} from '@react-native-image-picker';
import MyStack from './routes/MyStack';
export default function App() {
  
  const Stack =createStackNavigator();

  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>

    
   
  );
}


