import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text, Button} from 'react-native';
import AppText from './AppText';
import {removeFromCart, adjustQty} from '../../Store/Shopping/Shopping-actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
function Cart_card({item, removeFromCart, adjustQty}) {
  const [counter, setCounter] = useState(item.qty);
  const handleIncrement = () => {
    setCounter(counter + 1);
    adjustQty(item.id, counter);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
    adjustQty(item.id, counter);
  };
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.qty}>Quantity= {item.qty}</AppText>
        <AppText style={styles.Price}>
          Price = Rs{item.price * item.qty}
        </AppText>

        <View style={{flexDirection: 'row', marginTop: 5}}>
          {counter > 0 ? (
            <>
              <Button
                color={colors.black}
                title="+"
                onPress={handleIncrement}
                style={styles.button}
              />
              <Text style={{fontSize: 18, marginLeft: 10, marginRight: 10}}>
                {item.qty}
              </Text>
              <Button
                color={colors.black}
                title="-"
                onPress={handleDecrement}
                style={styles.button}
              />
            </>
          ) : (
            <>
              <Button
                color={colors.black}
                title="+"
                onPress={handleIncrement}
                style={styles.button}
              />
              <Text style={{fontSize: 18, marginLeft: 10, marginRight: 10}}>
                {item.qty}
              </Text>
              <Button
                color={colors.black}
                title="-"
                onPress={handleDecrement}
                style={styles.button}
                disabled
              />
            </>
          )}
          <TouchableOpacity
            onPress={() => {
              removeFromCart(item.id);
            }}
            style={{
              justifyContent: 'center',
              flex: 1,
              backgroundColor: 'yellow',
              width: '100%',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              borderColor: colors.black,
              borderWidth: 1,
              marginTop: 2,
              left: 100,
            }}>
            <Icon name="delete" color="black" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(Cart_card);
import {StyleSheet} from 'react-native';
import colors from '../config/colors';
const styles = StyleSheet.create({
  card: {
    width: '100%',
    top: 15,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'stretch',
  },
  detailsContainer: {paddingLeft: 20, paddingTop: 20, justifyContent: 'center'},
  title: {
    fontSize: 15,
    fontWeight: '700',
  },

  Price: {left: 140},
  qty: {
    top: 23,
  },
});
