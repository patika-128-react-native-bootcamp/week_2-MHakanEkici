import React, {forwardRef, memo, useImperativeHandle} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';

const Input =  memo(forwardRef(({title, updateText}, ref) => {

  useImperativeHandle(ref, () => ({
    clearText: () => {
      this.textInput.clear()
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} onChangeText={updateText}  ref={input => { this.textInput = input }}/>
    </View>
  );
}));

export default memo (Input);
