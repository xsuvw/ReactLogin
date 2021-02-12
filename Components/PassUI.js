import React from 'react';
import {View, Text} from 'react-native';
import {signUpStyle} from '../SignUp';

export function PassUI({top, bottom}) {
    return(
        <View style = {signUpStyle.row}>
            <Text style = {{alignItems : 'center', justifyContent : 'center'}}>
                {top}
            </Text>
            <Text>
                {bottom}
            </Text>
        </View>
    );
}