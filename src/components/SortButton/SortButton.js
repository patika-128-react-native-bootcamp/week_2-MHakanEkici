import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SortButton.style';

const SortButton = memo(({buttonTitle, onClick, isSelected}) => {
  return (
    <View>
      <TouchableOpacity 
      style={{...styles.button_container, backgroundColor: isSelected ? '#57686f' : '#cfd7da'}} 
      onPress={onClick}
      >
        <Text style={{...styles.button_title, color: isSelected ? 'white' : '#5b6268'}}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default memo (SortButton);
