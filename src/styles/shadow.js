import { StyleSheet } from 'react-native';

export const shadowStyles = StyleSheet.create({
  boxView: {
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
