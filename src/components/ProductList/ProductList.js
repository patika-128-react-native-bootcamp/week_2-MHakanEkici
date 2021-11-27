import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItemView from './ListItemView';
import styles from './ProductList.style';

const ProductList = ({data}) => {
  return (
    <View style={styles.listBody}>
      <FlatList
        data={data}
        renderItem={({item}) => <ListItemView item={item}></ListItemView>}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperator} />;
        }}
      />
    </View>
  );
};

export default ProductList;
