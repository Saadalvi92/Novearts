import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import CardComponent from '../Components/CardComponent';
function HomeScreen({navigation}) {
  const data1 = [
    {
      id: '1',
      title: 'Web Designing',
      subTitle: 'Services',
      image: require('../Assets/webdesign.png'),
      details: [
        '1 .Complete Prototype Design',
        '2 .Complete Web Design on Photoshop or other platforms.',
        '3 .Complete Web Design implementation from psd designs',
      ],
    },
    {
      id: '2',
      title: 'Mobile Application',
      subTitle: 'Development',
      image: require('../Assets/Mobile-Application-Development.png'),
      details: [
        '1. Complete mobile Application design on React Native.',
        '2. Api and Backend Integration of mobile application.',
      ],
    },
    {
      id: '3',
      title: 'Web Development',
      subTitle: 'Development',
      image: require('../Assets/web-left-banner.jpg'),
      details: [
        '1. Complete WebDevelopment on wordpress front end & Bacakend.',
        '2. Complete Web app development on React Js.',
        '3. Front End on React js.',
        '4. Backend on Node js,Laravell,Php.',
      ],
    },
    {
      id: '4',
      title: 'Graphics Designing',
      subTitle: 'Services',
      image: require('../Assets/U1a3d11e1f0f04448a279459ec8a72e781.jpg'),
      details: [
        '1. Brochure design',
        '2. Magazine design.',
        '3. Buisness card design.',
        '4. Flyover design.',
        '5. Banner design.',
        '6. Cover page design.',
        '7. Icon design.',
        '8. 2d graphics design.',
      ],
    },
    {
      id: '5',
      title: 'E-Commerce',
      subTitle: 'Solutions',
      image: require('../Assets/download.png'),
      details: [
        '1. Complete website developing on Shopify platform',
        '2. Big commerce.',
        '3. Woo commerce.',
        '4. Complete content writing for shopify websites.',
        '5. Complete integration with facebook pixels.',
        '6. Integration of Oberlo.',
        '7. Integration with plugin for Woo commerce.',
      ],
    },
  ];
  const [data, setData] = useState(data1);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState(data1);
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
          keyExtractor={data.id}
          renderItem={({item}) => (
            <CardComponent
              items={item}
              onPress={() => {
                navigation.navigate('Card-Detail', item);
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
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
