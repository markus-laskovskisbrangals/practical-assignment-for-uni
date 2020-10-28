import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('/yes.jpg')}/>
      <Text style={styles.parOne}>Hello World from Group G2: Ricards Zvaigzne</Text>
      <Text style={styles.parTwo}>This is my - first React Native application</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parOne: {
    textAlign: 'center',
    textAlignmentsVertical: 'center',
    color: '#30148',
    fontFamily: "TimesNewRoman-BoldMT",
    fontSize: 30
  },
  parTwo: {
    textAlign: 'center',
    textAlignmentsVertical: 'center',
    color: '#cec6da',
    fontFamily: "Arial-BoldMT",
    fontSize: 16
  },
  img: {
    width: 150,
    height: 150
  }
});