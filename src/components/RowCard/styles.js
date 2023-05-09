import {StyleSheet} from 'react-native';
import {Colors, Margin, Text} from '../../config/styling';

export default () =>
  StyleSheet.create({
    container: (index, length) => ({
      width: 200,
      height: 330,
      borderRadius: Margin.large,
      backgroundColor: '#fff',
      padding: Margin.small,
      marginRight: index == length - 1 ? 0 : Margin.xLarge,
      elevation: 4,
      shadowColor: Colors.darkGray,
    }),
    likeWrapper: {
      width: Margin.xxLarge,
      height: Margin.xxLarge,
      borderRadius: Margin.xMedium,
      backgroundColor: Colors.red,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 10000,
      right: Margin.large,
      top: Margin.large,
    },
    likeImg: {
      width: Margin.xMedium,
      height: Margin.xMedium,
      tintColor: Colors.white,
    },
    chairImg: {
      width: 176,
      height: 200,
      borderRadius: Margin.large,
    },
    descriptionWrapper: {
      paddingTop: Margin.medium,
    },
    itemName: {
      fontWeight: '600',
      color: Colors.black,
      fontSize: Text.h4,
    },
    itemDesc: {
      color: Colors.darkGray,
      paddingTop: 2,
      paddingBottom: Margin.medium,
    },
    itemPrice: {
      fontSize: Text.h4,
      paddingBottom: Margin.xSmall,
      color: Colors.mediumGray,
    },
    addWrapper: {
      backgroundColor: Colors.darkBlack,
      width: Margin.xxLarge,
      height: Margin.xxLarge,
      borderRadius: Margin.medium,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Margin.xSmall,
    },
    addIcon: {
      width: Margin.medium,
      height: Margin.medium,
      tintColor: '#fff',
    },
    priceWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
  });
