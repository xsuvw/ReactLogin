import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { styles } from './App';

export default function Card(){
    return(
        <View style = {cardStyle.cardBody}>
        <Text>
               CARD
        </Text>
        </View>
    );
}

export const cardStyle = StyleSheet.create({
    cardBody : {
        padding : 40,
        margin : 20,
        borderRadius : 10,
        shadowColor : '#000',
        backgroundColor : '#fff'
    }
});