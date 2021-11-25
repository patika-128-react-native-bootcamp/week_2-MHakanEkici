import React from 'react';
import {View} from 'react-native';
import SortButton from '../SortButton';
import styles from './SortCard.style';

const SortCard = ({updateSelectedButton, isButtonSelected}) => {

  return (
    <View style={styles.sortCard_container}>
      <SortButton id='1' isSelected={isButtonSelected('1')} buttonTitle= "Artan Fiyat" onClick={() => updateSelectedButton('1')}></SortButton>
      <SortButton id='2' isSelected={isButtonSelected('2')} buttonTitle= "Azalan Fiyat" onClick={() => updateSelectedButton('2')}></SortButton>
      <SortButton id='3' isSelected={isButtonSelected('3')} buttonTitle= "Tarih" onClick={() => updateSelectedButton('3')}></SortButton>
    </View>
  );
};

export default SortCard;
