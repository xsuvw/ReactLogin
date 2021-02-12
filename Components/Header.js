import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../App'

export function  HeaderTitle ({headText, subText}) {
  return (
    <View style={styles.header}>
      <View style={styles.innerContainer}>
        <Text style={styles.textHeadingStyle}>{headText}</Text>
        <Text style={styles.textStyle}>{subText}</Text>
      </View>
    </View>
  );
}
