import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../App';

export function Button({BtnText}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{BtnText}</Text>
    </TouchableOpacity>
  );
}
