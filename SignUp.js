import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Footer} from './Components/Footer';
import {HeaderTitle} from './Components/Header';
import {Button} from './Components/Button';
import {TextBox} from './Components/TextBox';
import {styles} from './App'; 
import { PassUI } from './Components/PassUI';

export default function App() {
  return (
    <ScrollView>
      <HeaderTitle
        headText="Sign Up"
        subText="Enter following details to register on Koyn."
      />

      <View style = {styles.body}>
        <TextBox hint="Phone Number" obscure={false} />
        <TextBox hint="Email" obscure={false} />
        <TextBox hint="Password" obscure={true} />

        <View style={signUpStyle.container}>    
             <PassUI bottom="Lowercase" top="a"/>
             <PassUI bottom="Uppercase" top="A"/>
             <PassUI bottom="Special" top="#"/>
             <PassUI bottom="Characters" top="6+"/>
        </View>

        <TextBox hint="Confirm Password" obscure={true} />

        <Button BtnText = "Sign Up"/>
        <Footer leftText = "Already have an account?" rightText = "Log In" />
      </View>
    </ScrollView>
  );
}

export const signUpStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom : 5,
    marginLeft :22,
    marginRight : 22,
    justifyContent : 'space-between',
    marginTop : 10
  },
  row : {
      flexDirection : 'column',
      alignItems : 'center',
      justifyContent : 'center'
  }
});
