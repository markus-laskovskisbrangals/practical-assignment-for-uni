import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
		<TouchableOpacity onPress={()=>{Linking.openURL('https://youtu.be/DLzxrzFCyOs');}}>
			<Image style={styles.img} source={require('./assets/rat.png')}/>
        </TouchableOpacity>
		<Text style={styles.parOne}>Hello World from Group G2: Baiba Ozola!</Text>
		<Text style={styles.parTwo}>This is my Baiba Ozola first React Native application!</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
	backgroundColor: '#708090',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parOne: {
    textAlign: 'center',
    color: '#4b0082',
    fontFamily: "monospace",
    fontSize: 20
  },
  parTwo: {
    textAlign: 'center',
    color: '#cec6da',
    fontFamily: "Roboto",
    fontSize: 16
  },
  img: {
    width: 50,
    height: 50
  }
});