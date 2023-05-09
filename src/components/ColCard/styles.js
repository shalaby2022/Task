import {StyleSheet} from 'react-native';
import {Colors, Margin, Text} from '../../config/styling';

export default () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 120,
      backgroundColor: Colors.white,
      borderRadius: Margin.medium,
      marginBottom: Margin.medium,
    },
    flexWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Margin.medium,
    },
    imgWrapper: {
      width: '26%',
      height: '80%',
    },
    chairImg: {
      width: '100%',
      height: '110%',
      backgroundColor: 'red',
      borderRadius: Margin.medium,
    },
    itemDetails: {
      width: '60%',
      height: '80%',
      justifyContent: 'center',
    },
    itemName: {
      fontSize: Text.h4,
      color: Colors.black,
    },
    itemDesc: {
      fontSize: Text.h6,
      paddingTop: 3,
      color: Colors.mediumGray,
    },
    itemPrice: {
      fontSize: Text.h5,
      color: Colors.black,
      paddingTop: 3,
    },
    rightIconWrapper: {
      width: Margin.xxxLarge,
      height: Margin.xxxLarge,
      borderRadius: Margin.xSmall,
      backgroundColor: Colors.black,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: Margin.medium,
      right: Margin.small,
    },
    rightIcon: {
      width: Margin.xLarge,
      height: Margin.xLarge,
      tintColor: Colors.white,
    },
  });
