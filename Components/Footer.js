import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../Login';

export function Footer({leftText, rightText}) {
    return(
        <View style = {styles.footer}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
                {leftText}
        </Text>
        <Text style={{marginLeft: 5, color: '#425563', fontWeight: 'bold'}}>
          {rightText}
        </Text>
        </View>
    );
}