import React, {Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

class AddItem extends React.Component{

    static navigationOptions = {
        title: 'AddItem',
        headertitleStyle: {
            color: 'white',
            fonstSize: 20,
            fontWeight: '400'
        }
    }

    render(){
        return(
            <View>
                <Text>Add Grocery</Text>
            </View>
        )
    }
}

export default AddItem