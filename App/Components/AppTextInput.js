import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';
import textdefault from '../config/textdefault';

function AppTextInput({icon, iconColor, size, backgroundColor, ...otherprops}) {
  return (
    <View style={styles.Container}>
      <AppIcon
        style={styles.icon}
        name={icon}
        iconColor={iconColor}
        size={size}
        backgroundColor={backgroundColor}></AppIcon>
      <TextInput
        style={[textdefault.text, {flex: 1}]}
        {...otherprops}
        placeholderTextColor={colors.offWhite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    width: '95%',
    padding: 15,
    marginLeft: 10,
    marginRight: 5,
    marginVertical: 10,
    borderRadius: 30,
  },
  Icon: {marginRight: 10},
});
export default AppTextInput;
