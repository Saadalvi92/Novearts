import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import colors from '../config/colors';
function ChatScreen({navigation}) {
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true,
    },
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User',
      },
    },
  ]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <View style={{height: '100%', width: '100%'}}>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
        color={colors.black}
      />
      <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        user={{_id: 1}}
      />
    </View>
  );
}

export default ChatScreen;
