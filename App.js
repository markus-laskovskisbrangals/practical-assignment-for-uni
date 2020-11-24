import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./pepe.png')}/>
      <Text style={styles.parOne}>Hello World from Group G2: Emīls Daivids Kļaviņš: -!</Text>
      <Text style={styles.parTwo}>This is my - first React Native application!</Text>
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
    color: '#4b0082',
    fontFamily: "Arial-BoldMT",
    fontSize: 20
  },
  parTwo: {
    textAlign: 'center',
    textAlignmentsVertical: 'center',
    color: '#cec6da',
    fontFamily: "Arial-BoldMT",
    fontSize: 16
  },
  img: {
    width: 50,
    height: 50
  }
});
