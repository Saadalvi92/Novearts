import React from 'react';
import RegisterScreen from '../Screens/RegisterScreen';
import Login from '../Screens/Login/Login';
import Admin from '../Screens/Admin';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../Screens/ChatScreen';

const Stack = createStackNavigator();
function SignupNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SignupNav;
