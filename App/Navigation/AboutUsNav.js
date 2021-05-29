import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import CheckOut from '../Screens/CheckOut';
import Login from '../Screens/Login';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CardNav from './CardNav';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function AboutUsNav(props) {
  return (
    <Tab.Navigator initialRouteName="AboutUs">
      <Tab.Screen
        name="Login"
        component={Login}
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

export default AboutUsNav;
