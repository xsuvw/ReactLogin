import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function InstaEats() {
  return (
    <ScrollView style = {{backgroundColor : '#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign In</Text>
      </View>
      <View style = {styles.inputs}>
        <TextInput
                style={styles.inputFeild}
                placeholder = "E-mail"
                placeholderTextColor = "#999999"
                secureTextEntry = {false}>
          </TextInput>

          <TextInput
                style={styles.inputFeild}
                placeholder = "Password"
                placeholderTextColor = "#999999"
                secureTextEntry = {false}>
          </TextInput>
      </View>
      <View style = {{alignItems : 'flex-end'}}>
      <Text style = {styles.forgotText}> 
                Forgot password?
          </Text>
      </View>
      <View style = {styles.buttons}>
            <TouchableOpacity style = {styles.loginButton}>
                <Text style = {{color : '#fff', fontSize : 17}}>
                    Log In
                </Text>
            </TouchableOpacity>
            <View style = {{alignItems : 'center' , marginTop : 40}}>
            <Text>
                OR
            </Text>
            </View>
            <TouchableOpacity style = {styles.loginFaceButton}>
                <Text style = {{color : '#fff', fontSize : 17}}>
                    Login with Facebook
                </Text>
            </TouchableOpacity>
      </View>

      <View style = {styles.footerButtons}>
          <TouchableOpacity style = {{backgroundColor : '#000', padding : 15, borderRadius : 5}}>
                <View style = {{flexDirection : 'row'}}>
                    <Image source = {require('./assets/apple.png')} style = {{marginLeft : 5, width : 22, height : 22}}>
                    </Image>
                    <Text style = {{marginLeft : 7, color : '#fff'}}>
                        Sign in with Apple
                    </Text>
                </View>
          </TouchableOpacity>
          <Text style = {{color : '#33adff', fontSize : 15, marginTop : 5, fontWeight : 'bold'}}>
              Login with phone number
          </Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    marginLeft: 25,
  },
  headerText: {
    color: '#339933',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom : 30
  },
  inputs: {
    marginLeft : 20,
    marginRight : 20,
    flexDirection: 'column',
  },
  inputFeild : {
      backgroundColor : "#fff",
      borderRadius : 20,
      borderWidth: 0.08,
      marginTop : 20,
      color : '#000',
      paddingLeft : 18
  },
  forgotText : {
      fontSize : 15,
      marginTop : 5,
      fontWeight : 'bold',
      color : '#33adff',
      marginRight : 20,
  },
  buttons : {
        marginTop : 40,
        marginLeft : 60,
        marginRight : 60,
  },
  loginButton : {
      backgroundColor : '#339933',
      borderRadius : 20,
      padding : 12,
      alignItems : 'center'
  },
  loginFaceButton : {
    backgroundColor : '#4267B2',
    borderRadius : 20,
    padding : 12,
    alignItems : 'center',
    marginTop : 40
  },
  footerButtons : {
      marginTop : 25,
      marginLeft : 60,
      marginRight : 60,
      alignItems : 'center'
  }
});
