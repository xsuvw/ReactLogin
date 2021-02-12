import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {styles} from '../App';

export function TextBox ({hint,obscure}) {
    return(
        <TextInput
          style ={styles.input}
          placeholder= {hint}
          placeholderTextColor="#999999"
          secureTextEntry={obscure}></TextInput>
    );
}