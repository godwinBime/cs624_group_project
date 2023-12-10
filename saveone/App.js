import { StyleSheet, Text, View } from 'react-native';
import {React,  Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import ReadItems from './src/FrontEnd/ReadItem/ReadItems'
import AddItem from './src/FrontEnd/AddItem/AddItem'
import UpdateItem from './src/FrontEnd/UpdateItem/UpdateItem';
import DeleteItem from './src/FrontEnd/DeleteItem/DeleteItem';
import EditItem from './src/FrontEnd/UpdateItem/EditItem';



const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function UpdateStackScreen(){   
  return(
    <Stack.Navigator>
      <Stack.Screen name='Update Items' component={UpdateItem} options={{headerShown: false}}/>
      <Stack.Screen name='Edit Item' component={EditItem} options={{headerShown: false}}/>       
    </Stack.Navigator>
  )
}

export default class App extends Component {
/*
  state ={
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

  <Tab.Screen name='Delete Item' initialParams={{items: this.state.items, delete: this.delete}} component={DeleteItem}/> 
*/

  render(){
    return(
      <NavigationContainer>        
           <Tab.Navigator>                  
            <Tab.Screen name='Read Items' component={ReadItems}/>
            <Tab.Screen name='Add Item' component={AddItem}/>
            <Tab.Screen name='Update Item' component={UpdateStackScreen}/>
            <Tab.Screen name='Delete Item' component={DeleteItem}/>        
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
