import React from 'react';
import {View, Text} from 'react-native';
import styles from './ProductList.style';

const ListItemView = ({item}) => {
  return (
    <View style={styles.itemBody}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.price}>{item.price} TL</Text>
    </View>
  );
};

export default ListItemView;
