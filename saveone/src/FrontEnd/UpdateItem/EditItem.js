import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import saveOneStyles from "../../saveoneStyle/style";

export default class EditItem extends React.Component{
  static navigationOptions = {        
    title: 'EditItem',
    headertitleStyle: {
        color: 'white',
        fonstSize: 20,
        fontWeight: '400'
    }
}

  state = {
      id: this.props.route.params._id,
      itemDescription: this.props.route.params.itemDescription,
      price: this.props.route.params.price,
      manufacturer: this.props.route.params.manufacturer,
      quantity: this.props.route.params.quantity,
      picture: this.props.route.params.picture,
      serialNumber: this.props.route.params.serialNumber
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  submit = () =>{   
    // fetch(`https://laughing-happiness-p5jwv5px9w3rv77-3000.app.github.dev/update-item`, {
  //           method: "PUT",
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({
  //             id: route.params._id,   
  //             itemDescription,
  //             price,
  //             manufacturer,
  //             quantity,
  //             picture,
  //             serialNumber                  
  //           })                              
  //       })
  //       .then(res=>res.json())
  //       .then((data) => {
  //         alert(`Item with serial number: ${data.serialNumber} updated`)    
  //         navigation.navigate("Update Items")
  //       })
  //       .catch(err => {
  //         alert(`Update Error: ${err}`)
  //       })    
  alert("You clicked the Update button. Functionality pending.") 
  }

  render(){
    return(
        <View style={styles.container}>          
          <Text style={styles.header}>Caution: You are about to modify a listing.</Text>
            <Text style={styles.heading}>Item Description</Text>
            <TextInput style={styles.input} value={this.state.itemDescription} 
            onChangeText={val => this.onChangeText('itemDescription', val)}/>
            <Text style={styles.heading}>Price:</Text>
            <TextInput style={styles.input} value={this.state.price} onChangeText={val => this.onChangeText('price', val)}/>
            <Text style={styles.heading}>Manufacturer:</Text>
            <TextInput style={styles.input} value={this.state.manufacturer} onChangeText={val => this.onChangeText('manufacturer', val)}/>
            <Text style={styles.heading}>Picture:</Text>
            <TextInput style={styles.input} value={this.state.picture} onChangeText={val => this.onChangeText('picture', val)}/>
            <Text style={styles.heading}>Quantity:</Text>
            <TextInput style={styles.input} value={this.state.quantity} onChangeText={val => this.onChangeText('quantity', val)}/>
            <Text style={styles.heading}>Serial Number:</Text>
            <TextInput style={styles.input} value={this.state.serialNumber} onChangeText={val => this.onChangeText('serialNumber', val)}/>
            <TouchableOpacity onPress={this.submit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Update</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }
} 

const styles = StyleSheet.create({
  header:{
    marginBottom:50, 
    marginTop: -50,
    marginLeft: 10,
    fontSize: 20, 
    fontWeight: "bold",
    alignItems: 'center',
  },
    button: {
      height: 51,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 11,
      width: 100
    },
    buttonText: {
      color: 'white',
      fontSize: 17
    },
    heading: {
      color: 'black',
      fontSize: 14,
      marginTop: 5,
      alignSelf: 'center'
    },
    container: {
      backgroundColor: '#c0c0c0',
      flex: 1,
      justifyContent: 'center'
    },
    input: {
      margin: 9,
      backgroundColor: 'white',
      paddingHorizontal: 9,
      height: 49
    }
  })