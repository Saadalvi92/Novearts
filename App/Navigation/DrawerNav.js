import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import AboutUsNav from './AboutUsNav';
import Home from './AppNav';
import CheckOutNav from './CheckOutNav';
import ContactUsNav from './ContactUsNav';
import LoginNav from './LoginNav';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
function DrawerNav(props) {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#000'}}
      drawerContentOptions={{inactiveTintColor: 'white'}}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUsNav}
        options={{
          drawerIcon: ({size, color}) => (
            <Icon name="contacts" size={size} color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="CheckOut"
        component={CheckOutNav}
        options={{
          drawerIcon: ({size, color}) => (
            <Icon name="shopping-cart" size={size} color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutNav"
        component={AboutUsNav}
        options={{
          drawerIcon: ({size, color}) => (
            <Icon name="groups" size={size} color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginNav}
        options={{
          drawerIcon: ({size, color}) => (
            <Icon name="login" size={size} color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
