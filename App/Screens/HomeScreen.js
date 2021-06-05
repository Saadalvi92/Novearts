import React, {useState} from 'react';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import CardComponent from '../Components/CardComponent';
import {connect} from 'react-redux';
import FloatingButton from '../Components/FloatingButton';
function HomeScreen({navigation, products}) {
  const [data, setData] = useState(products);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState(products);
  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <View style={{height: '100%'}}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({item}) => (
            <CardComponent
              key={item.id}
              items={item}
              onPress={() => {
                navigation.navigate('Card-Detail', item);
              }}
            />
          )}
        />
      </View>
      <FloatingButton
        style={{bottom: 100}}
        onPress={() => {
          navigation.navigate('chat');
        }}
      />
    </View>
  );
}
const mapStateToProps = state => {
  return {products: state.shop.products};
};
export default connect(mapStateToProps)(HomeScreen);
const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
});
