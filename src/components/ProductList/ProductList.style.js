import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  listBody: {
    height: Dimensions.get('window').height / 1.6
  },  
  itemBody: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  seperator: {
    height: 0.5,
    backgroundColor: 'gray',
  },
});
