import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const ReadScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace 'http://your-backend-url/api/getItems' with your actual backend endpoint
      const response = await axios.get('http://your-backend-url/api/getItems');

      if (response.data) {
        setData(response.data); // Set the fetched data to state
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Item Description: {item.itemDescription}</Text>
      <Text>Price: {item.price}</Text>
      <Text>Manufacturer: {item.manufacturer}</Text>
      {/* Render other fields as needed */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id} // Assuming each item has a unique '_id' field
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 5,
  },
});

export default ReadScreen;
