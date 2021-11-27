import React, {memo} from 'react';
import {View} from 'react-native';
import SortButton from '../SortButton';
import styles from './SortCard.style';

const SortCard = memo(({updateSelectedButton, isButtonSelected}) => {
  return (
    <View style={styles.sortCard_container}>
      <SortButton
        sortType="Increasing Price"
        isSelected={isButtonSelected('Increasing Price')}
        buttonTitle="Artan Fiyat"
        onClick={() => updateSelectedButton('Increasing Price')}></SortButton>
      <SortButton
        sortType="Decreasing Price"
        isSelected={isButtonSelected('Decreasing Price')}
        buttonTitle="Azalan Fiyat"
        onClick={() => updateSelectedButton('Decreasing Price')}></SortButton>
      <SortButton
        sortType="Added Date"
        isSelected={isButtonSelected('Added Date')}
        buttonTitle="Tarih"
        onClick={() => updateSelectedButton('Added Date')}></SortButton>
    </View>
  );
});

export default memo(SortCard);
