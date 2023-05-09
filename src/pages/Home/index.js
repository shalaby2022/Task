import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../config/Images';
import RowCard from '../../components/RowCard';
import {Products} from '../../assets/Products';
import ColCard from '../../components/ColCard';
import {Colors} from '../../config/styling';

const Home = () => {
  const renderItem = ({item, index}) => {
    return (
      <RowCard
        name={item.name}
        image={item.image}
        description={item.desc}
        price={item.price}
        index={index}
        length={Products.length}
      />
    );
  };

  const renderVerticalItem = ({item}) => {
    return (
      <ColCard
        image={item.image}
        name={item.name}
        price={item.price}
        description={item.desc}
      />
    );
  };
  return (
    <ScrollView style={styles().container}>
      {/* Top-section */}
      <View style={styles().topWrapper}>
        <TouchableOpacity>
          <Image source={IMAGES.menu} style={styles().menuImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles().userWrapper}>
          <Image source={IMAGES.user} style={styles().userImg} />
        </TouchableOpacity>
      </View>
      {/* Search-section */}
      <View style={styles().searchSection}>
        <View style={styles().searchWrapper}>
          <TouchableOpacity>
            <Image source={IMAGES.search} style={styles().searchIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="search"
            placeholderTextColor={Colors.mediumGray}
            style={styles().textInput}
          />
        </View>
        <TouchableOpacity>
          <Image source={IMAGES.cart} style={styles().cartImg} />
          <View style={styles().alert}></View>
        </TouchableOpacity>
      </View>
      {/* Horizontal-flatList-Section */}
      <Text style={styles().exploreHeader}>Explore</Text>
      <View style={{marginVertical: 20}}>
        <FlatList
          data={Products}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      {/* Vertical-flatList-section */}
      <View style={styles().headerMargin}>
        <Text style={styles().sellingHeader}>Best Selling</Text>
      </View>
      <View style={styles().verticalListWrapper}>
        <FlatList
          data={Products}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderVerticalItem}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
