import React, {createRef, forwardRef, memo, useImperativeHandle, useRef, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Input from '../Input';
import styles from './ProductAddArea.style';

const ProductAddArea = memo(forwardRef(({addProduct}, ref) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    let inputProductNameRef = useRef(null)
    let inputPriceRef = useRef(null)

    useImperativeHandle(ref, () => ({
      clearInputText: () => {
        inputProductNameRef.current.clearText();
        inputPriceRef.current.clearText();
      },
    }));

    return (
      <View style={styles.container}>
        <View style={styles.seperator}></View>
        <Input title="Name" updateText={setProductName} ref={inputProductNameRef}></Input>
        <Input title="Price" updateText={setPrice} ref={inputPriceRef}></Input>
        <TouchableOpacity
          style={styles.button_container}
          onPress={() =>
            productName.trim() && price.trim()
              ? addProduct(productName, price)
              : alert('Please enter the product information completely!')
          }>
          <Text style={styles.button_title}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }),
);

export default memo(ProductAddArea);
