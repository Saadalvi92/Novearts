import React from 'react';
import {ScrollView} from 'react-native';
import {Text, StyleSheet, View, Image} from 'react-native';
import AppText from '../Components/AppText';
import colors from '../config/colors';
function CardDetailScreen(props) {
  const item = props.route.params;
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={item.image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{item.title}</AppText>
          <AppText style={styles.price}>{item.subTitle}</AppText>
          {item.details.map(txt => (
            <AppText>{txt}</AppText>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default CardDetailScreen;
const styles = StyleSheet.create({
  image: {paddingTop: 100, width: '100%', height: 300},
  detailsContainer: {padding: 20},
  title: {fontSize: 24, fontWeight: '500'},
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
