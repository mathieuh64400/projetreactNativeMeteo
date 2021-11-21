import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

import { useRoute } from '@react-navigation/native'

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import Header from "./../utils/Header";
import { HeaderView } from "../utils/styles.js";
import ListItems from "./../utils/ListItems.js";
import {Container} from "./../utils/styles";
import InputModal from "../utils/InputModal.js";
import Intermediaire from "../utils/Intermediaire.js";

const AddFavori = () => {
  // 
  const [ready, setReady] = useState(false);

  // todo initial list
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const loadTodos = () => {
    AsyncStorage.getItem("storedTodos")
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setReady(true)
  //   }, 1000);
  // }, [])

    return (
    <>
    <Container>
      {!ready && <AppLoading
      onFinish={() => {
        setReady(true)
      
      }}
      onError={(err) => {
        console.log(err);
      }}
      ><Text color>Not Ready</Text></AppLoading>}
     {ready && <Intermediaire todos={todos} setTodos={setTodos}/>}
    </Container>
    </>
    );
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        width:'100%' ,
        backgroundColor:"black"
    },texteinfo: {
        flex: 1,
        width:'100%' ,
        color:"white"
    }
});
export default AddFavori;