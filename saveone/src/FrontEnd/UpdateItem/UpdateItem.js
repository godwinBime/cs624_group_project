import React, {Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

class UpdateItem extends React.Component{
    static navigationOptions = {
        title: 'UpdateItem',
        headertitleStyle: {
            color: 'white',
            fonstSize: 20,
            fontWeight: '400'
        }
    }

    render(){
        return(
            <View>
                <Text>Update Grocery</Text>
            </View>
        )
    }
}

export default UpdateItem