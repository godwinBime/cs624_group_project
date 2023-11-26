import React, {Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

class DeleteItem extends React.Component{
    static navigationOptions = {
        title: 'DeleteItem',
        headertitleStyle: {
            color: 'white',
            fonstSize: 20,
            fontWeight: '400'
        }
    }

    render(){
        return(
            <View>
                <Text>Delete Grocery</Text>
            </View>
        )
    }
}

export default DeleteItem