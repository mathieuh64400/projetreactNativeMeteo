import React from "react";
import { View, Text, StyleSheet,Button} from 'react-native';

// import { useRoute } from '@react-navigation/native';

export default function Mention({ navigation }) {
    const pressHandler = () => {
        navigation.push("Welcome");
        }
    // const route = useRoute()
return(
    <View  style={styles.container}>
        <Text style={styles.br}>...............................</Text>
        <Text style={styles.title}> Mentions Legales 
            </Text>
            <Text style={styles.subtitle}>  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </Text>
       
        
        <Button title="Accueil" onPress={pressHandler} style={styles.button}/>
    </View>)

}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        flex: 0,
        backgroundColor:'black'
    },
    br:{ flex: 1,
        marginBottom:20,
        color:'black'
    },
    title:{
        flex: 1,
        height:"5%",
        // alignItems: 'flex-start',
        // justifyContent: 'center',
       
        paddingLeft: 70,
        // marginBottom: 5,
        fontSize:25,
        fontWeight:"bold",
        marginLeft:15,
        paddingTop:2,
        color:'white'
    },
    subtitle:{
        flex: 9,
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        paddingLeft: 20,
        fontSize:17, 
        color:'white'
       
    },
    paragraph:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 1,
        fontSize:15,
         color:'white'
    },
    button:{
        backgroundColor:'#6D28D9',
        color:'black',
        width:"100%"
    }


})



