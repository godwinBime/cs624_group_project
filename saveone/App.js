import { StyleSheet, Text, View } from 'react-native';
import {React,  Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from "react-native";


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import ReadItems from './src/FrontEnd/ReadItem/ReadItems'
import AddItem from './src/FrontEnd/AddItem/AddItem'
import UpdateItem from './src/FrontEnd/UpdateItem/UpdateItem';
import DeleteItem from './src/FrontEnd/DeleteItem/DeleteItem';



const Tab = createBottomTabNavigator()

export default class App extends Component {

  state ={
    // cities: [],
    // countries: []
    items: [],
    price: []
  }

  addGrocery = () => {
    
  }

  readGrocery = () => {
    
  }

  update = () => {

  }

  delete = () => {

  }

 

  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Read Items' initialParams={{items: this.state.items, readGrocery: this.readGrocery}} component={ReadItems}/>
          <Tab.Screen name='Add Item' initialParams={{items: this.state.items, addGrocery: this.addGrocery}} component={AddItem}/>
          <Tab.Screen name='Update Item' initialParams={{items: this.state.items, update: this.update}} component={UpdateItem}/>
          <Tab.Screen name='Delete Item' initialParams={{items: this.state.items, delete: this.delete}} component={DeleteItem}/>          
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
