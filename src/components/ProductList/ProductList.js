import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './ProductList.style';

const ProductList = ({data}) => {
  return (
    <View style={styles.listBody}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemBody}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>{item.price} TL</Text>
          </View>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperator} />;
        }}
      />
    </View>
  );
};

export default ProductList;
