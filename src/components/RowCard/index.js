import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../config/Images';

const RowCard = ({image, name, description, price, index, length}) => {
  return (
    <View style={styles().container(index, length)}>
      <TouchableOpacity style={styles().likeWrapper}>
        <Image source={IMAGES.like} style={styles().likeImg} />
      </TouchableOpacity>
      <Image source={image} style={styles().chairImg} resizeMode="cover" />
      <View style={styles().descriptionWrapper}>
        <Text style={styles().itemName}>{name}</Text>
        <Text style={styles().itemDesc}>{description}</Text>
      </View>
      <View style={styles().priceWrapper}>
        <Text style={styles().itemPrice}>{price}</Text>
        <TouchableOpacity style={styles().addWrapper}>
          <Image source={IMAGES.plus} style={styles().addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RowCard;
