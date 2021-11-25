import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Input from '../Input';
import styles from './ProductAddArea.style';

const ProductAddArea = ({addProduct}) => {
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();

  return (
    <View style={styles.container}>
      <Input title="Name" updateText={setProductName}></Input>
      <Input title="Price" updateText={setPrice}></Input>
      <TouchableOpacity style={styles.button_container} onPress={() => addProduct(productName,price)}>
        <Text style={styles.button_title}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductAddArea;
