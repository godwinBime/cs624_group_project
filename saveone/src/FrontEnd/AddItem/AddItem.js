// AddItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors} from 'saveone/src/theme.js';
//import {saveOneStyles, container,} from 'saveone/src/style/style'
import ImagePicker from 'react-native-image-picker';


const AddItemScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [amount, setamount] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImageUri(response.uri);
      }
    });
  };

  const addItem = () => {
    // Logic to add item to the list or database
    console.log(`Added item: ${inputValue} - Description: ${descriptionValue} - amount {amount}`);
    setInputValue('');
    setDescriptionValue('');
    setamount('');
    setImageUri(null);
    
  };



  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Item"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={styles.input}
      />
  
      <TextInput
        placeholder="Enter Description"
        value={descriptionValue}
        onChangeText={(text) => setDescriptionValue(text)}
        style={styles.input}
      />   

    <TextInput
        placeholder="Enter Amount"
        value={amount}
        onChangeText={(text) => setamount(text)}
        style={styles.input}
      />
    <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>


      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.primary
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white'
    
  },

  button: {
    padding: 10,
    backgroundColor: 'white', // Assuming colors.primary is defined in 'saveone/src/theme.js'
    justifyContent: 'center',
    alignItems: 'center',
    //width: '100%',
    borderColor: 'black',
    marginBottom: 10,
    //borderRadius: 8
  },

  buttonText: {
    color: colors.primary, // Change the text color
    //fontSize: 18, // Change the font size
    fontFamily: 'Arial', // Change the font family
    fontWeight: 'bold'// Change the font weight (optional)
    
  },

  image: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,}

})

export default AddItemScreen;
