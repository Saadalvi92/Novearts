import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class FloatingButton extends React.Component {
  animation = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    this.open = !this.open;
  };
  render() {
    const FbStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };
    const InstaStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };
    const WebStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Animated.View style={[styles.button, styles.secondary, WebStyle]}>
            <Icon name="chat" size={20} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, InstaStyle]}>
            <AntDesign name="instagram" size={20} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, FbStyle]}>
            <Icon name="facebook" size={20} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Icon name="add-ic-call" size={24} color="#000" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: 'yellow',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: 'yellow',
    left: 10,
  },
  secondary: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#fff',
    left: 10,
  },
});
{
  /* <View
style={{
  flex: 1,
  justifyContent: 'flex-end',
  position: 'absolute',
  bottom: '1%',
  backgroundColor: '#fff',
  opacity: 0.8,
}}>
<View
  style={{
    flexDirection: 'row',
    width: wp('95%'),
    justifyContent: 'space-between',
  }}>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: wp('10%'),
        alignItems: 'center',
        alignItems: 'center',
      }}>
      <EvilIcons name="sc-facebook" size={30} color="#000000" />
    </View>

    <View
      style={{
        width: 1,
        height: 25,
        backgroundColor: '#909090',
      }}></View>

    <View
      style={{
        width: wp('10%'),
        alignItems: 'center',
        alignItems: 'center',
      }}>
      <AntDesign name="instagram" size={26} color="#000000" />
    </View>

    <View
      style={{
        width: 1,
        height: 25,
        backgroundColor: '#909090',
      }}></View>

    <View
      style={{
        width: wp('10%'),
        alignItems: 'center',
        alignItems: 'center',
      }}>
      <Ionicons name="md-globe-outline" size={26} color="#000000" />
    </View>
  </View>

  <View>
    <TouchableOpacity
      style={{
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#f90000',
      }}>
      <Ionicons name="ios-call" size={20} color="#fffdff" />
      <Text
        style={{
          color: '#fffdff',
          marginLeft: 10,
          fontSize: 20,
        }}>
        Call
      </Text>
    </TouchableOpacity>
  </View>
</View>
</View> */
}
