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
        {/* <Text>{route.params.paramA}</Text> */}
        <Text style={styles.title}> Mention Legales </Text>
        <Text style={styles.subtitle}>perspiciatis unde omnis iste natus error </Text>
        <Text style={styles.paragraph}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
        <Button title="Accueil" onPress={pressHandler} style={styles.button}/>
    </View>)

}
const styles = StyleSheet.create({
    container:{
        flex: 0,
        backgroundColor:'black'

    },title:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 45,
        marginBottom: 40,
        fontSize:25,
        fontWeight:"bold",
        marginLeft:15,
        color:'white'
    },
    subtitle:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,
        fontSize:23, 
        color:'white'
       
    },
    paragraph:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,
        fontSize:20, color:'white'
    },
    button:{
        backgroundColor:'#6D28D9',
        colors:'black',
        width:"100%"
    }


})



