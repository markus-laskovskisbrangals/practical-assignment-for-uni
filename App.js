import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello World from Group 2 : Markus Ļaskovskis-Brangals!</Text>
      <Text style={styles.text2}>This is my Markus Ļaskovskis-Brangals first React Native application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
