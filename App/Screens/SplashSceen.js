import React, {useEffect} from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';

let height = Dimensions.get('window').height;
function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={require('../Assets/logo.png')}></Image>
    </View>
  );
}

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    marginTop: height * 0.5,
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Cochin',
  },
});
