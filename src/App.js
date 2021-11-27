import React, {createRef, useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import ProductAddArea from './components/ProductAddArea/ProductAddArea';
import ProductList from './components/ProductList/ProductList';
import SortCard from './components/SortCard';

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedSortingType, setSelectedSortingType] = useState('Added Date');

  // ProductAddArea componentindeki bir fonksiyonu tetiklemek için referans oluşturur.
  // sayfanın return'ünde ProductAddArea componentine props olarak yazılır -->  ref={productAddAreaRef}.
  // Şu şekilde componentteki fonksiyon tetiklenir --> productAddAreaRef.current.clearInputText();
  let productAddAreaRef = createRef();

  //To render the product list again sort with the new added product.
  useEffect(() => {
    sortProductList(dataList, selectedSortingType);
  }, [dataList]);

  //Is the sort button selected check, returns boolean. This using for change selected buttons color.
  function isSelected(sortType) {
    return selectedSortingType === sortType;
  }

  function updateSelectedSortingType(sortType) {
    setSelectedSortingType(sortType);
    sortProductList(dataList, sortType);
  }

  function sortProductList(data, sortType) {
    // Sort types for sortType:  Increasing Price: Artan    Decreasing Price: Azalan    Added Date: Tarih
    if (sortType === 'Increasing Price') {
      data.sort((a, b) => a.price - b.price);
      setDataList(data);
    }
    if (sortType === 'Decreasing Price') {
      data.sort((a, b) => b.price - a.price);
      setDataList(data);
    }
    if (sortType === 'Added Date') {
      data.sort((a, b) => b.addingDate - a.addingDate);
      setDataList(data);
    }
  }

  function handleAddProduct(productName, price) {
    const productData = [
      ...dataList,
      {
        name: productName,
        price: price,
        addingDate: Date.now(),
      },
    ];
    setDataList(productData);
    productAddAreaRef.current.clearInputText();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SortCard
          isButtonSelected={isSelected}
          updateSelectedButton={sortType =>
            updateSelectedSortingType(sortType)
          }></SortCard>
        <ProductList data={dataList} renderItem={dataList}></ProductList>
        <ProductAddArea
          addProduct={handleAddProduct}
          ref={productAddAreaRef}></ProductAddArea>
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
