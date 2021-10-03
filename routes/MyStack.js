import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from './../utils/styles';
const {primary,tertiary}=Colors;
import React from 'react';
const Stack = createStackNavigator();
// import Login from '../screens/Login';
// import Signup from '../screens/Signup';
import Prevision from'../components/Prevision';

import Mention from '../components/Mention';
import Welcome from'../components/Welcome';
import About from'../components/About';
import AddFavori from'../components/AddFavori';
import List from '../components/List';
import Home from '../components/Home';
import Search from '../components/Search';
import Login from '../components/Login';
import Signup from '../components/Signup';
const MyStack = () => {
    return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{
        backgroundColor:primary
        },
        headerTintColor:primary,
        headerBackTitle:'',
        headerTransparent:true
       }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Mention" component={Mention} />
    <Stack.Screen name="Prevision" component={Prevision} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddFavori" component={AddFavori} />
    <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
    )
    }
    export default MyStack