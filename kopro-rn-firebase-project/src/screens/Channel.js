import React, {useState, useEffect, useLayoutEffect} from 'react';
import {DB, createMessage} from '../utils/firebase';
import styled from 'styled-components/native';
import {Text, FlatList, Alert} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const Channel = ({navigation, route: {params}}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = DB.collection('channels')
      .doc(params.id)
      .collection('messages')
      .orderBy('createAt', 'desc')
      .onSnapshot((snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setMessages(list);
      });
    return () => unsubscribe();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: params.title || 'Channel'});
  }, []);

  const _handleMessageSend = async (messageList) => {
    const newMessage = messageList[0];
    try {
      await createMessage({channelId: params.id, message: newMessage});
    } catch (e) {
      Alert.alert('Send Message Error', e.message);
    }
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={messages}
        renderItem={({item}) => <Text style={{fontSize: 24}}>{item.text}</Text>}
        inverted={true}
      />
    </Container>
  );
};

export default Channel;
