import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import CheckOut from '../Screens/CheckOut';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardNav from './CardNav';
import SignupNav from './SignupNav';

const Tab = createMaterialBottomTabNavigator();

function CheckOutNav(props) {
  return (
    <Tab.Navigator initialRouteName="CheckOut">
      <Tab.Screen
        name="Login"
        component={SignupNav}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="login" size={size} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="contacts" size={size} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={CardNav}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="groups" size={size} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="shopping-cart" size={size} color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default CheckOutNav;
