 import React,{Component} from 'react';
 import {Text,View} from 'react-native';

 export default class Feed extends Components {
     render(){
         return(
             <View>
                 style={{
                     flex:2.5,
                     justifyContent:"center",
                     alignItems:"center"
                 }}
                 <Text>Feeds</Text>
             </View>
         )
     }
 }