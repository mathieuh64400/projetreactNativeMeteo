import React from "react";

// styled components
import {
    SpaceView,
  
} from "./styles.js";

// Icons
import { Entypo } from "@expo/vector-icons";
import { Text, View,StyleSheet } from "react-native";

const Espace = () => {
  return (
      <>
  <Text style={styles.texte}>
 ...
  </Text>
  </>
  );
};
const styles = StyleSheet.create({
    texte: {
        marginTop:"3%",
        marginBottom:"5%",
        color:"transparent",
        textAlign:"center"
    }
    
})


export default Espace;