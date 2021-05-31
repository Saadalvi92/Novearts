import React from 'react';
import colors from '../../config/colors';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

function AppButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: 'yellow'}]}
      onPress={onPress}>
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
}
export default AppButton;
