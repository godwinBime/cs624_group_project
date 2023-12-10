// // AddItemScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { colors } from '../../style/theme';
// //import {saveOneStyles, container,} from 'saveone/src/style/style'
// import ImagePicker from 'react-native-image-picker';


// const AddItemScreen = () => {
//   const [itemDescription, setItemDescription] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [serialNumber, setSerialNumber] = useState('');
  

//   const pickImage = () => {
//     ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
//       if (!response.didCancel && !response.error) {
//         setImageUri(response.uri);
//       }
//     });
//   };

//   const addItem = () => {
//     // Logic to add item to the list or database
//     console.log(`Added item: ${itemDescription} - Quantity ${quantity} - price {price}`);
//     setItemDescription('');
//     setManufacturer('');
//     setPrice('');
//     setQuantity('');
//     setPicture(null);
//     setSerialNumber('')
    
//   };
//   const AddItemScreen = async () => {
//     try {
//       const newItem = {
//         ItemName: itemDescription,
//         Price: price,
//         Image: picture,
//         Manufacturer: manufacturer,
//         Quantity: quantity,
//         SerialNumber: serialNumber
//       };

//       const response = await fetch('https://ubiquitous-space-happiness-gp5w6gxqq962wprg-3000.app.github.dev/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//       });

//       if (response.ok) {
//         // Item added successfully
//         console.log('Item added:', newItem);
//           setItemDescription('');
//           setManufacturer('');
//           setPrice('');
//           setQuantity('');
//           setPicture(null);
//           setSerialNumber('')
//       } else {
//         console.error('Failed to add item:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error adding item:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter Item"
//         value={itemDescription}
//         onChangeText={(text) => setItemDescription(text)}
//         style={styles.input}
//       />
  
//       <TextInput
//         placeholder="Enter Manufacturer"
//         value={manufacturer}
//         onChangeText={(text) => setManufacturer(text)}
//         style={styles.input}
//       />   

//     <TextInput
//         placeholder="Enter Price"
//         value={price}
//         onChangeText={(text) => setPrice(text)}
//         style={styles.input}
//       />

// <TextInput
//         placeholder="Enter Quantity"
//         value={quantity}
//         onChangeText={(text) => setQuantity(text)}
//         style={styles.input}
//       />
//     <TouchableOpacity style={styles.button} onPress={pickImage}>
//         <Text style={styles.buttonText}>Pick Image</Text>
//       </TouchableOpacity>


//       {picture && <Image source={{ uri: picture }} style={styles.image} />}

//       <TouchableOpacity style={styles.button} onPress={addItem}>
//         <Text style={styles.buttonText}>Add Item</Text>
//       </TouchableOpacity>

//     </View>

    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: colors.primary
//   },

//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: 'white'
    
//   },

//   button: {
//     padding: 10,
//     backgroundColor: 'white', // Assuming colors.primary is defined in 'saveone/src/theme.js'
//     justifyContent: 'center',
//     alignItems: 'center',
//     //width: '100%',
//     borderColor: 'black',
//     marginBottom: 10,
//     //borderRadius: 8
//   },

//   buttonText: {
//     color: colors.primary, // Change the text color
//     //fontSize: 18, // Change the font size
//     fontFamily: 'Arial', // Change the font family
//     fontWeight: 'bold'// Change the font weight (optional)
    
//   },

//   image: {
//     width: 200, // Adjust the width and height as needed
//     height: 200,
//     marginBottom: 20,}

// })

// export default AddItemScreen;


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