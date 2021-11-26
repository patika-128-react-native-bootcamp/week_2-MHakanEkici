import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  listBody: {
    height: Dimensions.get('window').height / 1.6,
  },
  itemBody: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seperator: {
    height: 1.5,
    backgroundColor: '#dbdfe0',
  },
});
