import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Cart_card from '../Components/Cart_card';
import AppText from '../Components/AppText';
import colors from '../config/colors';
function CheckOut({cart}) {
  // const [cartCount, setCartCount] = useState(0);
  // useEffect(() => {
  //   let count = cart.length;
  //   setCartCount(count);
  // }, [cart, cartCount]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [totalItems, setTotalItems, totalPrice, setTotalPrice, cart]);

  return (
    <View style={{flex: 1}}>
      {/* <Text>{cartCount}</Text>
      {cart.map(item => (
        <Text>{item.title}</Text>
      ))} */}
      <FlatList
        data={cart}
        renderItem={({item}) => <Cart_card key={item.id} item={item} />}
      />
      <View
        style={{
          backgroundColor: colors.black,
          width: '99%',
          height: 50,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: colors.black,
          marginLeft: 3,
          marginBottom: 3,
          marginRight: 3,
          marginTop: 3,
          borderRadius: 10,
        }}>
        <View style={{flex: 1, justifyContent: 'center', marginLeft: '6%'}}>
          <AppText style={{color: 'yellow'}}>
            Items in the Cart={totalItems}
          </AppText>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <AppText style={{color: 'yellow'}}>
            TotalPrice=RS. {totalPrice}
          </AppText>
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {cart: state.shop.cart};
};
export default connect(mapStateToProps)(CheckOut);
