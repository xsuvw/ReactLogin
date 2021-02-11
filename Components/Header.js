import React from 'react';
import {View, Text} from 'react-native';

export default function HeaderTitle(props){
    return(
        <View style = {styles.header}>
          <View style = {styles.innerContainer}>
              <Text style = {styles.textHeadingStyle}>
                  {this.props.headText}  
              </Text>
              <Text style = {styles.textStyle}>
                    {this.props.subText}    
              </Text>
          </View>
      </View>
    );
}