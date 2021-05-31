import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import colors from '../config/colors';
import {WebView} from 'react-native-webview';
function AboutUs(props) {
  var DEFAULT_URL = 'https://novearts.com/about-us/';
  const Spinner = () => (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <WebView
        bounces={false}
        startInLoadingState={true}
        renderLoading={Spinner}
        style={styles.container}
        source={{uri: DEFAULT_URL}}
        showsHorizontalScrollIndicator={false}
        scalesPageToFit
      />
    </View>
  );
}

export default AboutUs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.black,
    height: '100%',
    width: '100%',
  },
});
