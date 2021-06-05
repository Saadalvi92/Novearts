import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppText from '../AppText';
import colors from '../../config/colors';
function AdminCard({item}) {
  return (
    <View
      style={{
        flex: 0.1,
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <AppText
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#000',
              left: '30%',
            }}>
            {item.id}
          </AppText>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <AppText style={{fontWeight: 'bold', fontSize: 15, color: '#000'}}>
            {item.ProjectName}
          </AppText>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <AppText style={{fontWeight: 'bold', fontSize: 15, color: '#000'}}>
            {item.ProjectStatus}
          </AppText>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <AppText style={{fontWeight: 'bold', fontSize: 15, color: '#000'}}>
            {item.PaymentStatus}
          </AppText>
        </View>
      </View>
    </View>
    //   {/* <AppText>{item.id}</AppText>
    //   <AppText>{item.ProjectName}</AppText>
    //   <AppText>{item.ProjectStatus}</AppText>
    //   <AppText>{item.PaymentStatus}</AppText> */}
  );
}

export default AdminCard;
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    marginTop: 10,
    marginBottom: 10,

    height: 140,
    width: 100,
    borderRadius: 5,
    backgroundColor: colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  detailsContainer: {
    paddingLeft: '10%',
    paddingTop: '10%',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.secondary,
  },
});
