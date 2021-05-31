import color from 'color';
import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import colors from '../config/colors';
function ContactUs(props) {
  var DEFAULT_URL = 'https://novearts.com/contact-us/';
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

export default ContactUs;
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
