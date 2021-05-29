import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  card: {
    top: 15,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: '30%',
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  detailsContainer: {paddingLeft: 20, paddingTop: 20, justifyContent: 'center'},
  title: {
    marginBottom: 7,
    fontSize: 15,

    fontWeight: '700',
  },
  subTitle: {
    color: colors.secondary,
  },
});
export default styles;
