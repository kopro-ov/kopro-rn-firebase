import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direcation: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #808080;
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const ItemDescription = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;
const ItemTime = styled.Text`
  font-size: 12px;
`;
const channels = [];
for (let idx = 0; idx < 1000; idx++) {
  channels.push({
    id: idx,
    title: `title ${idx}`,
    description: `description ${idx}`,
    createAt: idx,
  });
}

const Item = ({item: {id, title, description, createAt}, onPress}) => {
  console.log(`Item: ${id}`);

  return (
    <ItemContainer onPress={() => onPress({id, title})}>
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemTextContainer>
      <ItemTime>{createAt}</ItemTime>
    </ItemContainer>
  );
};

const ChannelList = ({navigation}) => {
  const _handleItemPress = (params) => {
    navigation.navigate('Channel', params);
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={channels}
        renderItem={({item}) => <Item item={item} onPress={_handleItemPress} />}
      />
    </Container>
  );
};

export default ChannelList;
