import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import Footer from './Footer';
// Documentation for adding multiple screens
// https://reactnative.dev/docs/navigation

export default function App() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [age, setAge] = useState()
  const [location, setLocation] = useState()
  const [height, setHeight] = useState()

  return (
    <ScrollView style={styles.container_outer} contentContainerStyle={styles.container_inner}>
      <View style={styles.subContainer}>

      <Image style={styles.logo} source={require("./assets/logo.png")}></Image>

      <Text style={styles.paragraph}>Welcome To Together Journey. The dating app that gives you a starting point to your relationship</Text>

      <TextInput value={firstName} style={styles.input} onChangeText={(value) => {setFirstName(value)}} placeholder=' What is your first name?'></TextInput>
      <TextInput value={lastName} style={styles.input} onChangeText={(value) => {setLastName(value)}} placeholder=' What is your last name?'></TextInput>
      <TextInput value={age} style={styles.input} onChangeText={(value) => {setAge(value)}} placeholder=' How old are you?'></TextInput>
      <TextInput value={location} style={styles.input} onChangeText={(value) => {setLocation(value)}} placeholder=' Where do you live?'></TextInput>
      <TextInput value={height} style={styles.input} onChangeText={(value) => {setHeight(value)}} placeholder=' How tall are you?'></TextInput>
      </View>

      <View style={styles.subContainer}>

      <Text style={styles.paragraph}>First Name: {validateValue(firstName)}</Text>
      <Text style={styles.paragraph}>Last Name: {validateValue(lastName)}</Text>
      <Text style={styles.paragraph}>Age: {validateValue(age)}</Text>
      <Text style={styles.paragraph}>Place of Residence: {validateValue(location)}</Text>
      <Text style={styles.paragraph}>Height: {validateValue(height)}</Text>

      </View>

      <Footer ></Footer>

      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

function validateValue(value) {
  if(value){
    return `"${value}"`
  } else{
    return ""
  }
}

const styles = StyleSheet.create({
  container_outer: {
    backgroundColor: '#ec4104',
  },
  container_inner: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,

  },
  subContainer: {
    width:'100%',
  },
  logo: {
    alignSelf:'center',
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
  },
});


