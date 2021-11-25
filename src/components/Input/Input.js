import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';

const Input = ({title, updateText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} onChangeText={updateText} />
    </View>
  );
};

export default Input;
