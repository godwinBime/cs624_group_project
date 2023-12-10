import React, {Component } from 'react';
import {View, Text, FlatList, Image, SafeAreaView, ActivityIndicator, Alert, Button} from 'react-native'
import saveOneStyles from '../../saveoneStyle/style';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs()

class UpdateItem extends Component{
    static navigationOptions = {        
        title: 'UpdateItem',
        headertitleStyle: {
            color: 'white',
            fonstSize: 20,
            fontWeight: '400'
        }
    }

    constructor(props){
        super(props)

        this.state = {
            items: [],
            isLoading: true
        }
    }

    async getItems(){
        try{
            const response = await fetch(`https://laughing-happiness-p5jwv5px9w3rv77-3000.app.github.dev/`, {
                method: 'GET'
            })
            const items = await response.json()
            this.setState({items})
        }catch(error){
            Alert.alert(error)
        }finally{
            this.setState({isLoading: false})
        }
    }

    componentDidMount(){
        this.getItems()
    }    

    render(){
        const {items, isLoading} = this.state
        return(
            <SafeAreaView>
                {isLoading ? (
                    <ActivityIndicator/>
                ):(
                    <FlatList
                    data={items}
                    keyExtractor={({id}) => id}  
                    renderItem={({item}) => (                       
                        <View style={[saveOneStyles.container, saveOneStyles.itemDescripitionCard]} key={item._id}>       
                                <Text >
                                    <Image style={saveOneStyles.itemImage}  source={{uri:item.picture}}/> {"\n"}
                                </Text>                   
                                <Text style={saveOneStyles.itemText}>                               
                                    {/* Id: {item._id}{"\n"} */}                           
                                    Item Description: {item.itemDescription}{"\n"}
                                    Price: {item.price}{"\n"}   
                                    Manufacturer: {item.manufacturer}{"\n"}                    
                                    Quatity: {item.quantity}{"\n"}                                
                                    Serial Number: {item.serialNumber}{"\n"} {"\n"}     
                                    <Button onPress={() => {
                                        this.props.navigation.navigate('Edit Item', 
                                        {_id:item._id, itemDescription: item.itemDescription, 
                                            price: item.price, manufacturer: item.manufacturer,
                                            picture: item.picture, quantity: item.quantity, 
                                            serialNumber: item.serialNumber}
                                        )}} title='Edit Item'/>                                                         
                                </Text>                         
                        </View>     
                    )}                  
                    />
                )}
            </SafeAreaView>
        )
    }
}

export default UpdateItem