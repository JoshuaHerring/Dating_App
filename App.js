import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

// Documentation for adding multiple screens
// https://reactnative.dev/docs/navigation

export default function App() {
  const [text, setText] = useState()
  return (
    <ScrollView style={styles.container_outer} contentContainerStyle={styles.container_inner}>
      <Image style={styles.logo} source={require("./assets/logo.png")}></Image>
      <Text style={styles.paragraph}>Welcome To Together Journey. The dating app that gives you a starting point to your relationship</Text>
      <TextInput style={styles.input} onChangeText={(newText) => {setText(newText)}} placeholder=' What is your name?'></TextInput>
      <Text style={styles.paragraph}>{text}</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container_outer: {
    backgroundColor: '#ec4104',
  },
  container_inner: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    // justifyContent: 'center'
  },
  logo: {
    marginTop:50,
    backgroundColor: '#fff',
    borderRadius:100,
    width: 200,
    height: 200
  },
  paragraph: {
    color:'white',
    marginTop:20
  },
  input: {
    marginTop:20,
    width:'100%',
    backgroundColor: 'white',
  }
});


