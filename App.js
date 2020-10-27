import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hello world, Marks Kristiāns Bomis form G2 here.
      </Text>
      <Text style={styles.text2}>
        This is my first React Native app!
      </Text>
      <Image style={styles.logo} source={require('flat.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#80f',
    margin: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: '#777',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
