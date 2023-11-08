// import { StatusBar } from 'expo-status-bar';
// Imports components and functions from react and react native to expidite code
import { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
// imports my custom footer compenent from another file
import Footer from './Footer';
// Documentation for adding multiple screens
// https://reactnative.dev/docs/navigation

// My main function that holds the whole mobile app inside of it
export default function App() {
  // initializes variable getters and setters named accordingly to use the proper react native way
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [age, setAge] = useState()
  const [location, setLocation] = useState()
  const [height, setHeight] = useState()

  // returns the whole view/ui for my app
  return (
    //A scrollview component used as a container for the rest of the app that can scroll up and down when the content goes off screen
    // Scrollview comes with two built in parts the inner or whats on the screen and the outer or the entire content that can be scrolled though styles are applied seperatly
    <ScrollView style={styles.container_outer} contentContainerStyle={styles.container_inner}>
      {/* A sub container to help organize code */}
      <View style={styles.subContainer}>
        {/* The apps main Logo imported from the assets folder */}
      <Image style={styles.logo} source={require("./assets/logo.png")}></Image>

      {/* Some welcome text with styles */}
      <Text style={styles.paragraph}>Welcome To Together Journey. The dating app that gives you a starting point to your relationship</Text>

      {/* A series of inputs that updates the variables initialized at the top of the fucntion on change, alos contains plaeholder text that appears when entry is empty */}
      <TextInput value={firstName} style={styles.input} onChangeText={(value) => {setFirstName(value)}} placeholder=' What is your first name?'></TextInput>
      <TextInput value={lastName} style={styles.input} onChangeText={(value) => {setLastName(value)}} placeholder=' What is your last name?'></TextInput>
      <TextInput value={age} style={styles.input} onChangeText={(value) => {setAge(value)}} placeholder=' How old are you?'></TextInput>
      <TextInput value={location} style={styles.input} onChangeText={(value) => {setLocation(value)}} placeholder=' Where do you live?'></TextInput>
      <TextInput value={height} style={styles.input} onChangeText={(value) => {setHeight(value)}} placeholder=' How tall are you?'></TextInput>
      </View>

      {/* another sub container for organization */}
      <View style={styles.subContainer}>

        {/* A series of text containers to display the data enterd in the earlier inputs */}
      <Text style={styles.paragraph}>First Name: {validateValue(firstName)}</Text>
      <Text style={styles.paragraph}>Last Name: {validateValue(lastName)}</Text>
      <Text style={styles.paragraph}>Age: {validateValue(age)}</Text>
      <Text style={styles.paragraph}>Place of Residence: {validateValue(location)}</Text>
      <Text style={styles.paragraph}>Height: {validateValue(height)}</Text>

      </View>

      {/* A self contained footer component that I made and is imported at the top of the file */}
      <Footer ></Footer>

      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

// Validates a value so that if it is there it displays it wrapped in quotes and if it is empty it does not display anything
function validateValue(value) {
  if(value){
    return `"${value}"`
  } else{
    return ""
  }
}

//All of my styles inside a stylesheet extremely similar to css in nature.
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