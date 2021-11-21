import React, { useEffect, useState } from "react";
import { View,  Text, StyleSheet,TouchableOpacity, Button, ImageBackground, FlatList,
KeyboardAvoidingView
} from 'react-native';

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
import { TextInput } from "react-native-gesture-handler";

const Sysfavori = ({ navigation }) => {
    const pressHandler = () => {
        navigation.push("Welcome")
        }

    const [name, setName] = useState([]);
    const [newname ,setnewname]= useState('');

    async function addName() {
        setName([...name,newname]);
        setnewname('');
        
    }
    useEffect(()=>{
        async function sys(){
            const name = await AsyncStorage.getItem("item");
            if (name) {
                setName(JSON.parse(name))
            }
        }
        sys();
    },[])
    useEffect(()=>{
        async function save() {
            AsyncStorage.setItem("item",JSON.stringify(name))
        }
        save();
    },[name])
    async function removeName(item) {
        setName(name.filter(names =>names !=item))
    }
    // const save = async()=>{
    //   try {
    //       await AsyncStorage.setItem('MyName',name)
          
    //   } catch (error) {
          
    //   }
    // }
    // const load = async () =>{
    //     try {
    //          let citie =await AsyncStorage.getItem('MyCity');
    //          if (citie !== null) {
    //              setitiesc(cities)
    //          }
            
    //     } catch (error) {
    //         alert(error)
    //     }
    // }
    // useEffect(()=>{
    //     load()
    // },[])
    return (
        <>
        {/* <KeyboardAvoidingView> */}
        <View style={styles.container}>
    
             <View style={styles.headerContainer}>
                 <Text style={styles.title}>  Donnez le nom de votre ville favorite: </Text>
                <View style={styles.form} >
                
              <TextInput 
             
               style={styles.input}
                placeholder='ville favorite'
                onChangeText={text => setnewname(text)}
                value={newname}
              
               
               />
               <TouchableOpacity  onPress={()=>addName()}>
                   
                    <Text style={styles.navtext}>Valider</Text>
                  </TouchableOpacity>

               </View>
            <FlatList  
            style={styles.FlatList}
            data={name}
            keyExtractor={item=>item.toString()}
            showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                <View style={styles.repartition}>
                    <Text style={styles.textitem}>{item}</Text>
                    <TouchableOpacity>
                    <Ionicons name="close-outline"size={32} color="white" onPress={()=>removeName(item)} />
               
                    </TouchableOpacity>
                </View>)}
            
            /> 
                  
        </View>    
        <Button title="Accueil" onPress={pressHandler} /> 
        </View> 
        {/* </KeyboardAvoidingView> */}
    </>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width:'100%',
          backgroundColor:"black"
        },
        headerContainer: {
          flex: 1,
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'space-between',
         
          backgroundColor:'black',
          width:'100%',
          height:1,
          marginTop:'10%'
      
      },
      list:{flex:1, marginTop:'15%',width:'100%', backgroundColor:'transparent', height:'100%', color:'white'},
      
      form:{ flex:2,width:'100%', backgroundColor:'transparent', height:'10%'},

      input:{
        marginLeft: '5%',
        marginTop:'5%',
        marginBottom:'5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'90%',
        height:33,
        paddingHorizontal: 10,
        textAlign:'left',
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    },
        repartition:{
        flex:4,
        flexDirection:'row',
        height:50,
        width:250,
        backgroundColor:'transparent',
        color:'white',
        // paddingTop:'%',
       
        zIndex:1,
        marginTop:'0%',
        textAlign:'center',
       
        
       },title:
        {
          color:"white",
         fontSize:20,
         flex:1,
         textAlign:'center',
         marginTop:'5%',
         marginBottom:'1%',
         height:'5%'
        },space:{
          flex:2,backgroundColor:'red'
        },
       textitem:{  width:'66%',
       height:25,
       textAlign:'center',
     fontSize: 15,
     color:'white',
     marginLeft:'15%',
     marginTop:'1%'
   },
        navtext:{
            width:'66%',
            height:25,
            textAlign:'center',
          fontSize: 15,
          color:'white',
          marginLeft:'15%',
          backgroundColor:'blue'
      
        },
        FlatList:{
            flex:6,
          
        }
      });
export default Sysfavori;