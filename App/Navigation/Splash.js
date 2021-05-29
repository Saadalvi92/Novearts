import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashSceen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DrawerNav from './DrawerNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
function Splash(props) {
  const MyTheme = {
    ...DefaultTheme,
    dark: false,

    colors: {
      ...DefaultTheme.colors,
      primary: 'yellow',
    },
  };
  function LogoTitle(props) {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

          overflow: 'hidden',
        }}>
        <View style={{flex: 3, alignItems: 'flex-end'}}>
          <Image
            source={require('../Assets/logo.png')}
            style={{height: 60, width: '70%'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',

            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Icon
              name="share"
              size={26}
              style={{
                alignContent: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNav}
          options={{headerTitle: props => <LogoTitle {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Splash;
