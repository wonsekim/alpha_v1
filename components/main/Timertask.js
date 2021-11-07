import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'



const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const hrs = Math.floor(time / (60*60));
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { hrs: formatNumber(hrs), mins: formatNumber(mins), secs: formatNumber(secs) };
}


export default function Timertask(props) {

  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { hrs, mins, secs } = getRemaining(remainingSecs);
  const type_given = props.route.params.type;
  const task_obj = {
    task_type: type_given,
    task_time: mins
  };
  
  toggle = () => {
    setIsActive(!isActive);
  }

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.typeText}>{type_given}</Text>
      <Text style={styles.timerText}>{`${hrs}:${mins}:${secs}`}</Text>
      
      
      <TouchableOpacity onPress={this.toggle} style={styles.button}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={this.reset} style={[styles.button, styles.buttonReset]}>
          <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => props.navigation.navigate('Donetask', {objTask: task_obj, status: 'Done'})} style={[styles.button, styles.buttonDone]}>
          <Text style={[styles.buttonText, styles.buttonTextDone]}>Done</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => props.navigation.navigate('Donetask', {objTask: task_obj, status: 'Fail'})} style={[styles.button, styles.buttonQuit]}>
        <Text style={[styles.buttonText, styles.buttonTextQuit]}>Quit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      borderWidth: 10,
      borderColor: '#B9AAFF',
      width: screen.width / 4,
      height: screen.width / 4,
      borderRadius: screen.width / 4,
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText: {
      fontSize: 25,
      color: '#B9AAFF'
  },
  typeText: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20
},
  timerText: {
      color: '#fff',
      fontSize: 45,
      marginBottom: 10
  },
  buttonReset: {
      marginTop: 20,
      borderColor: "#FF851B"
  },
  buttonDone: {
    marginTop: 20,
    borderColor: "#03F803"
  },
  buttonQuit: {
    marginTop: 20,
    borderColor: "#F308F3"
  },
  buttonTextReset: {
    color: "#FF851B"
  },
  buttonTextDone: {
    color: "#03F803"
  },
  buttonTextQuit: {
    color: "#F308F3"
  }
});
