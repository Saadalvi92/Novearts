import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Button, ToastAndroid, View, Image} from 'react-native';
import {connect} from 'react-redux';
import AppText from '../Components/AppText';
import colors from '../config/colors';
import AppButton from '../Components/AppButton';
import {addToCart} from '../../Store/Shopping/Shopping-actions';
function CardDetailScreen(props) {
  const item = props.route.params;
  const Addtocart = () => {
    ToastAndroid.show('Item added to Cart', ToastAndroid.SHORT);
    props.addToCart(item.id);
  };
  return (
    <ScrollView>
      <View key={item.key}>
        <Image style={styles.image} source={item.image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{item.title}</AppText>
          <AppText style={styles.price}>{item.subTitle}</AppText>
          {item.details.map(txt => (
            <AppText>{txt}</AppText>
          ))}
        </View>
        <AppButton title="Add to Cart" onPress={() => Addtocart()} />
      </View>
    </ScrollView>
  );
}
const mapDispatchToProps = dispatch => {
  return {addToCart: id => dispatch(addToCart(id))};
};
export default connect(null, mapDispatchToProps)(CardDetailScreen);

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
