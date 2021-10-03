import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator,TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TextInput } from 'react-native-gesture-handler';

export default function App({navigation}) {
  //   const [isLoading, setIsLoading] = React.useState(true);
  //   const [userToken, setUserToken] = React.useState(null);
  //   // const {loading, error, result}=useCity(text)
  //  const authContext=React.useMemo(()=>({
  //    signIn:()=>{
  //     setUserToken('fkg');
  //     setIsLoading(false);
  //    },
  //    signOut:()=>{
  //      setUserToken(null);
  //      setIsLoading(false);
  //     },
  //    signUp:()=>{},
  //  }));

  //   useEffect(()=>{
  //     setTimeout(()=>{
  //       setIsLoading(false);
  //     },1500);
  //   },[]);
//  if (isLoading) {
//     return (
//     <View style={styles.text}>
       
//        <ActivityIndicator size='large'/>
  
       
      
//       </View>)
//   } 
const image={ uri: "http://mourirmoinscon.com/images/2019/07/03/ciel-bleu-bd.jpg" };
    const [data, setData] = React.useState({
      email:'',
      password:'',
      check_textInputCange:false,
      secureTextEntry:true
    });
    const textInputChange=(value)=>{
      if (value.length !=0) {
        setData({
          ...data,email:value,
          check_textInputCange:true
        })
      }else{
        setData({
          ...data,email:value,
          check_textInputCange:false
        })
      }
    }
    const handlePasswordChange=(value)=>{
      
        setData({
          ...data,password:value,
        })
      
    }
    const updatedateSecureTextEntry =() =>{
      setData({
        ...data,secureTextEntry:!data.secureTextEntry,
      })
    }
    return (
      <ImageBackground source={image} resizeMode="cover"style={styles.image}>
      <View style={styles.text}>
       
        <Text style={{ fontSize: 24 }}>
          Connecter-vous pour voir et ajouter des favoris!!
        </Text>
        <View>
          <Text  style={{ marginTop:'10%',fontSize: 24 }}> <FontAwesome name="user-o" color="black"size={20}/> Email</Text>
          <View style={styles.nrep}>
            
            <TextInput placeholder="Your email" style={styles.TextInput} autoCapitalize='none' onChangeText={(value)=>textInputChange(value)}/> 
          
          </View> {data.check_textInputChange ?
            <Feather name='check-circle'size={20} color='red'/> :null}
          <Text style={{ marginTop:'10%',fontSize: 24 }}> <FontAwesome name="lock" color="black"size={20}/>Password</Text>
          <View style={styles.nrep}>
            
            <TextInput placeholder="Your password" style={styles.TextInput} autoCapitalize='none'secureTextEntry={data.secureTextEntry?true:false} onChangeText={(value)=>handlePasswordChange(value)}/> 
            
          </View>
          <TouchableOpacity
              style={styles.repartition}
              title="SignIn"
              type="Button"
              activeOpacity={0.7}
             onPress={() => {navigation.push("Favori")
            }}
            >
              <Text style={styles.buttontext}>Connexion</Text>
            </TouchableOpacity> 
        </View>
  
       
      
      </View>
      </ImageBackground>
    )  
   
  }
  const styles = StyleSheet.create({
    text:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center'

    }, TextInput:{
      fontSize:24,
      backgroundColor:'white'
    },nrep:{ 
      flex:2,
      flexDirection:"row"
    },
    weatherContainer: {
        flex: 1,
        width:'100%' 
    },
    buttontext:{
      fontSize: 15,
      color:'white',backgroundColor:'black',width:'100%',marginLeft:'-5%',height:'100%'
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
        backgroundColor:'black',
        opacity:'66%',
        width:'100%',
        height:2,

    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,backgroundColor:"bleu",
        width:"200%"
    },
    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 25,
        color: 'black',
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
      marginTop:'10%',
      
     }, tempsText:{
       fontSize:25
     }
});