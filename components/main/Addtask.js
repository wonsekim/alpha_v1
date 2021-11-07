import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



export default function Add_task({ navigation }) {
  
  //const [type, setType] = useState(null);
  return (
    <View style={{ flex: 1 }}>
         <Button
            title="기하학"
            onPress={() => {
              navigation.navigate('Timertask', { type: '기하학' })
            }
            }>
        </Button>
        <Button
            title="고고학"
            onPress={() => {
              navigation.navigate('Timertask', { type: '고고학' })
            }
            }>
        </Button>      
    </View>
  );
}

