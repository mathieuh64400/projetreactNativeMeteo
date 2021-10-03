import React from 'react';
import {View,FlatList,Text,StyleSheet,TouchableHighlight} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// utiliser les props pour utiliser les objets{result}
const List = ({result}) => {
  console.log(result);
  const navigation = useNavigation();
    return(
      <View>
        <Text> Zone de Recherche:</Text>
        <View>
             <FlatList
      style={styles.container}
      data={result}
      renderItem={({ item }) =>  <TouchableHighlight onPress={() => {
        navigation.push('Home', { param: item })
      }}><Text style={styles.row}>{item.name}</Text></TouchableHighlight>}
      keyExtractor={(item) => item.id.toString()}
    />
        </View>
        
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
  })
export default List;
