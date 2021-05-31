import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    paddingTop: '10%',
    width: '100%',
  },

  logo: {width: 200, height: 200},
  logoContainer: {position: 'relative', alignItems: 'center'},
});
export default styles;
