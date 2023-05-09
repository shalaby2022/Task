import {StyleSheet} from 'react-native';
import {Colors, Margin, Text} from '../../config/styling';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: Margin.xLarge,
      marginBottom: Margin.small,
    },
    topWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Margin.xLarge,
    },
    menuImg: {
      width: Margin.xLarge,
      height: Margin.xLarge,
    },
    userWrapper: {
      width: 40,
      height: 40,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    userImg: {
      width: Margin.xLarge,
      height: Margin.xLarge,
      tintColor: '#fff',
    },
    searchSection: {
      marginTop: Margin.xxLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '85%',
      paddingHorizontal: Margin.xxLarge,
      borderRadius: Margin.small,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowColor: '#fff',
      shadowRadius: 5,
      shadowOpacity: 1,
      elevation: 1,
      paddingVertical: 2,
      backgroundColor: '#fff',
      height: 50,
    },
    textInput: {
      fontSize: Text.h3,
      paddingEnd: Margin.medium,
      color: Colors.darkGray,
    },
    searchIcon: {
      width: Margin.large,
      height: Margin.large,
      marginRight: Margin.small,
    },
    cartImg: {
      width: 28,
      height: 28,
    },
    alert: {
      width: Margin.xSmall,
      height: Margin.xSmall,
      borderRadius: 4,
      position: 'absolute',
      backgroundColor: Colors.red,
      right: 0,
    },
    exploreHeader: {
      fontSize: Margin.xLarge,
      fontWeight: '600',
      color: '#111',
      paddingTop: Margin.large,
    },
    sellingHeader: {
      fontSize: Margin.xLarge,
      fontWeight: '600',
      color: '#111',
      paddingTop: Margin.large,
    },
    headerMargin: {
      marginBottom: 20,
    },
    verticalListWrapper: {
      flex: 1,
      marginBottom: 20,
    },
  });
