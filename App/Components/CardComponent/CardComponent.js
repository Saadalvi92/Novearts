import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './Style';
import colors from '../../config/colors';
function CardComponent({items, onPress}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={items.image}></Image>
        <View style={styles.detailsContainer}>
          <Text
            style={{
              color: colors.black,
              fontSize: 14,
              textAlign: 'justify',
              fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
              fontWeight: 'bold',
            }}>
            {items.title}
          </Text>
          <Text style={{color: colors.black, fontSize: 12, textAlign: 'auto'}}>
            {items.subTitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CardComponent;
