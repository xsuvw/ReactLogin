import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import {Header} from './Components/Header';

export default function App() {
  return (
    <ScrollView>
      {/* <View style = {styles.header}>
          <View style = {styles.innerContainer}>
              <Text style = {styles.textHeadingStyle}>
                  Log in  
              </Text>
              <Text style = {styles.textStyle}>
              Enter your login details to access your account.
              </Text>
          </View>
      </View> */}

      <HeaderTitle
        headText="Log in"
        subText="Enter your login details to access your account."
      />

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Email/Phone Number"
          placeholderTextColor="#999999"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999999"
          secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyBottom}>
        <Text style={styles.bodyBottomText}>Forgot password?</Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 10,
            color: '#000',
            fontWeight: 'bold',
          }}>
          or
        </Text>
        <Text style={styles.bodyBottomText}>Forgot email?</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{color: '#000', fontWeight: 'bold'}}>
          Here for the first time?
        </Text>
        <Text style={{marginLeft: 5, color: '#425563', fontWeight: 'bold'}}>
          Sign Up
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#425563',
    paddingTop: 80,
    paddingLeft: 20,
    paddingBottom: 80,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  innerContainer: {
    flexDirection: 'column',
  },
  textHeadingStyle: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 15,
    color: '#FFF',
    marginTop: 14,
  },
  body: {
    marginTop: 60,
    paddingLeft: 22,
    paddingRight: 22,
    flexDirection: 'column',
  },
  input: {
    color: '#000',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 15,
    height: 60,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    marginTop: 60,
    borderRadius: 10,
    backgroundColor: '#425563',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 14,
  },
  buttonText: {
    fontSize: 19,
    color: '#FFF',
    fontWeight: 'bold',
  },
  bodyBottom: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyBottomText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
