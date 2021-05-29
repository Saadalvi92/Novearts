import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CardDetailScreen from '../Screens/CardDetailScreen';
const Stack = createStackNavigator();
function CardNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Card-Detail"
        component={CardDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default CardNav;
