import React from 'react';
import RegisterScreen from '../Screens/RegisterScreen';
import Login from '../Screens/Login/Login';
import {createStackNavigator} from '@react-navigation/stack';
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
        S
      />
    </Stack.Navigator>
  );
}

export default SignupNav;
