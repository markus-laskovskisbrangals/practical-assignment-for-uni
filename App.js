import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./capybara.png')}/>
      <Text style={styles.text1}>Hello World from Group 2 : Markus Ļaskovskis-Brangals!</Text>
      <Text style={styles.text2}>This is my Markus Ļaskovskis-Brangals first React Native application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
    textAlign: 'center',
    
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
    
  },
  img: {
    width: 75,
    height: 75,
  }
});
