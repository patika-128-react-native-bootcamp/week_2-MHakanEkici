import React, {forwardRef, memo, useImperativeHandle, useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import styles from './ProductAddArea.style';

const ProductAddArea = memo(
  forwardRef(({addProduct}, ref) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    //forwardRef ile ref propsu alınır, useImperativeHandle ile bu refin tetikleyeceği fonksiyon içerisinde oluşturulur.
    useImperativeHandle(ref, () => ({
      clearInputText: () => {
        setProductName('');
        setPrice('');
      },
    }));

    return (
      <View style={styles.container}>
        <View style={styles.seperator}></View>

        <View style={styles.input_container}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setProductName}
            value={productName}
          />
        </View>

        <View style={styles.input_container}>
          <Text style={styles.inputTitle}>Price</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPrice}
            value={price}
          />
        </View>
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
