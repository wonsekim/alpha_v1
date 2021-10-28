import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



export default function Add_task({ navigation }) {
  
  //const [type, setType] = useState(null);


  return (
    <View style={{ flex: 1 }}>
         <Button
            title="Type1"
            onPress={() => {
              navigation.navigate('Savetask', { type: 'Type1' })
            }
            }>
        </Button>      
    </View>
  );
}

