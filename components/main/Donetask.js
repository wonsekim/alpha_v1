
import React, { useState, Component } from 'react';
import { StyleSheet, ScrollView , StatusBar} from 'react-native';
import PieChart from 'react-native-pie-chart';
import { View, Text, TextInput, Image, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'


  


export default function Donetask(props) {
    const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

    const [caption, setCaption] = useState("")
    const objTask = props.route.params.objTask;
    const status = props.route.params.status;

    const objnew = {
        task_type: objTask.task_type,
        task_time: objTask.task_time,
        task_stat: status,
        task_comm: caption
    };    
    const objold = global.objList;
    global.objList = objnew;
    return (
        <View style={{ flex: 1 }}>
            <Text> {objTask.task_type}</Text>
            <Text> {objTask.task_time}</Text>
            <Text> {status}</Text>

        
            <TextInput
                placeholder="Write a Comment . . ."
                onChangeText={(caption) => setCaption(caption)}
            />


            
            <Text> debug .. latest item of objList </Text>
            <Text> {objold.task_type}</Text>
            <Text> {objold.task_time}</Text>
            <Text> {objold.task_stat}</Text>
            <Text> {objold.task_comm}</Text>
            <Button
            title="go to stat"
            onPress={() => {
              props.navigation.navigate('stat')
            }
            }>
        </Button> 
        </View>

    )
}

