import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native';
import moment from 'moment-timezone'

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// import WeatherItem from './WeatherItem';
const WeatherItem= ({title,value,unity})=>{
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}> {title}</Text>
            <Text> {value}{unity}</Text>
        </View>
        )
}
export default function Datetime({current, lat, lon,timezone}) {
  
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");

    useEffect(()=>{
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    },[])
    
  return (
   <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.heading}> {time} </Text>
            </View>
            <View> 
                <Text style={styles.subheading}> {date}</Text>
            </View>
            <View style={styles.weatherItemContainer}>
            <WeatherItem title="Humidity" value={current? current.humidity : ""} unity="%"/>
            <WeatherItem title="Pressure" value={current? current.pressure : ""} unity="hpA"/>
             <WeatherItem title="Sunrise" value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unity="am"/>
             <WeatherItem title="Sunset" value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""}  unity="pm"/>
            </View>
        </View>
        <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{timezone}</Text>
               <Text style={styles.latlong}>{lat}N {lon}E</Text>
        </View>
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection:"row",
        justifyContent:'space-between',
        padding: 15
    },
    heading: {
        fontSize: 25,
        color:'white',
        fontWeight: '100'
    },
    subheading: {
        fontSize: 15,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign:'right',
        marginTop: 20
    },
    timezone: {
        fontSize: 15,
        color:'white'
    },
    latlong:{
        fontSize:10,
        color:'white',
        fontWeight: '700'
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color:'#eee',
        fontSize: 10,
        fontWeight: '100'
    }
// map:{
//   width:Dimensions.get('window').width/3,
//   height:Dimensions.get('window').height/3
// }
})