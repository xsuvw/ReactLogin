import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import {Button} from './Components/Button';
import {Footer} from './Components/Footer';
import {HeaderTitle} from './Components/Header';
import {TextBox} from './Components/TextBox';

export default function App() {
  return (
    <ScrollView>
      <HeaderTitle
        headText="Log in"
        subText="Enter your login details to access your account."/>

      <View style={styles.body}>
        <TextBox hint="Email/Phone Number" obscure={false} />
        <TextBox hint="Password" obscure={true} />

        <Button BtnText="Login" />
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

      <Footer leftText="Here for the first time?" rightText="Sign Up" />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
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
    marginTop: 80,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
