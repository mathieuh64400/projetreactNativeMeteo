import React from 'react';
import { View, Image, StyleSheet,Text,Button,TouchableOpacity  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor:"black"
  },headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
   marginTop:'2%',
    backgroundColor:'transparent',
    width:'100%',
    height:1,

},repartition:{
  flex:2,
  height:0.5,
  color:'white',
  // paddingTop:'%',
  marginLeft:'10%',
  zIndex:2,
  marginTop:'-25%',
  
 },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
   
  },title:
  {
    color:"white",
   fontSize:'50px',
   flex:1,
   textAlign:'center',
   marginTop:'-10%'
  },navtext:{
    fontSize: 15,
    color:'white'
  }
});

const Welcome = ({ navigation }) => {
       
        const pressHandler = () => {
          navigation.push("Mention")
          }
  return (
    <View style={styles.container}>

<View style={styles.headerContainer}>
            
            <TouchableOpacity
              style={styles.repartition}
              title="Search"
              activeOpacity={0.7}
              onPress={()=>{navigation.push("About")
            //  onPress={() => {navigation.push("Search")
            }}
            > <Ionicons name="help" size={32} color="white"/>
              <Text style={styles.navtext}>Condition Météo</Text>  
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.repartition}
              title="Prevision"
              activeOpacity={0.7}
             onPress={() => {navigation.push("Prevision")
            }}
            ><Ionicons name="partly-sunny" size={32} color="white"/>
              <Text style={styles.navtext}>Previsions</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style={styles.repartition}
              title="favori"
              activeOpacity={0.7}
             onPress={() => {navigation.push("AddFavori")
            }}
            ><Ionicons name="podium" size={32} color="white"/>
              <Text style={styles.navtext}>favori</Text>
            </TouchableOpacity> 

           
 </View>
         
        
        {<Text style={styles.title}>
           Bienvenue sur notre application Météo
        </Text>}
     
      <Button title="Mention Légales" onPress={pressHandler} 
/> 

    </View>
  );
}








export default Welcome;