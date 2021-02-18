import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../Login';
import { useNavigation } from '@react-navigation/native';

export function Button({BtnText, Nav, onPress}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} onPress = {onPress}>
      <Text style={styles.buttonText}>{BtnText}</Text>
    </TouchableOpacity>
  );
}
