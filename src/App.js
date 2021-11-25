import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import ProductAddArea from './components/ProductAddArea/ProductAddArea';
import ProductList from './components/ProductList/ProductList';
import SortCard from './components/SortCard';

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedSortingType, setSelectedSortingType] = useState('3');

  function isSelected(buttonId) {
    return selectedSortingType === buttonId;
  }

  function updateSelectedSortingType(buttonId) {
    setSelectedSortingType(buttonId);
    sortProductList(dataList, buttonId);
  }

  function sortProductList(data, buttonId) {
    // Sort types for buttonId:  1=Artan 2=Azalan 3=Tarih
    if (buttonId === '1') {
      data.sort((a, b) => a.price - b.price);
      setDataList(data);
    }
    if (buttonId === '2') {
      data.sort((a, b) => b.price - a.price);
      setDataList(data);
    }
    if (buttonId === '3') {
      data.sort((a, b) => b.addingDate - a.addingDate);
      setDataList(data);
    }
  }

  function handleAddProduct(productName, price) {
    const data = [
      ...dataList,
      {
        name: productName,
        price: price,
        addingDate: Date.now(),
      },
    ];
    setDataList(data);
    sortProductList(data, selectedSortingType);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SortCard
          isButtonSelected={isSelected}
          updateSelectedButton={buttonId =>
            updateSelectedSortingType(buttonId)
          }></SortCard>
        <ProductList data={dataList} renderItem={dataList}></ProductList>
        <ProductAddArea addProduct={handleAddProduct}></ProductAddArea>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
