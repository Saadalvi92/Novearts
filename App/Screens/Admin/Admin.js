import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {AdminCard} from '../../Components/Admin';
import FloatingButton from '../../Components/FloatingButton';

function Admin({navigation}) {
  const Data = [
    {
      id: 1,
      ProjectName: 'WebDesign',
      ProjectStatus: 'Ongoing',
      PaymentStatus: 'Payed',
    },
    {
      id: 2,
      ProjectName: 'SEO',
      ProjectStatus: 'Completed',
      PaymentStatus: 'Unpayed',
    },
    {
      id: 3,
      ProjectName: 'WebDesign',
      ProjectStatus: 'Ongoing',
      PaymentStatus: 'Partially Payed',
    },
    {
      id: 4,
      ProjectName: 'Mobile Application',
      ProjectStatus: 'Cancelled',
      PaymentStatus: 'UnPayed',
    },
    {
      id: 5,
      ProjectName: 'WebDesign',
      ProjectStatus: 'Ongoing',
      PaymentStatus: 'Payed',
    },
  ];
  const [filteredData, setFilteredData] = useState(Data);
  const handleStatus = Value => {
    Value === 'All'
      ? setFilteredData(Data)
      : setFilteredData(Data.filter(e => e.ProjectStatus === Value));
  };
  return (
    <View style={{height: '100%', width: '100%'}}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'yellow',
          }}>
          <TouchableOpacity
            onPress={() => {
              handleStatus('All');
            }}>
            <View
              style={{height: '100%', width: '100%', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleStatus('Ongoing');
            }}>
            <View
              style={{height: '100%', width: '100%', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>On-Going</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleStatus('Completed');
            }}>
            <View
              style={{height: '100%', width: '100%', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Completed</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleStatus('Cancelled');
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Cancelled</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#000',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            ID
          </Text>

          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            Name
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            Status
          </Text>

          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            Payment
          </Text>
        </View>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <AdminCard item={item} />}
      />
      <FloatingButton
        style={{bottom: 100}}
        onPress={() => {
          navigation.navigate('chat');
        }}
      />
    </View>
  );
}

export default Admin;
