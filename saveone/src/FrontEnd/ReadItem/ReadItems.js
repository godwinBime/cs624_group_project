import React, {omponent } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

class ReadItems extends React.Component{

    static navigationOptions = {
        title: 'ReadItems',
        headertitleStyle: {
            color: 'white',
            fonstSize: 20,
            fontWeight: '400'
        }
    }

    render(){
        return(
            <View>
                <Text>Read Grocery</Text>
            </View>
        )
    }
}

export default ReadItems