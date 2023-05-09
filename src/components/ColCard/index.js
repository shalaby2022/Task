import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../config/Images';

const ColCard = ({image, name, price, description}) => {
  return (
    <View style={styles().container}>
      <View style={styles().flexWrapper}>
        <View style={styles().imgWrapper}>
          <Image source={image} style={styles().chairImg} resizeMode="cover" />
        </View>
        <View style={styles().itemDetails}>
          <Text style={styles().itemName}>{name}</Text>
          <Text style={styles().itemDesc}>{description}</Text>
          <Text style={styles().itemPrice}>{price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles().rightIconWrapper}>
        <Image source={IMAGES.right} style={styles().rightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ColCard;
