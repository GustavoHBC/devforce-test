import React from 'react';
import { Container, Text } from './styles';

const CharacterItem = ({ name, episode, onPress }) => {
  return (
    <Container onPress={() => !!onPress && onPress()} activeOpacity={0.6}>
      <Text fontSize="small">{episode}</Text>
      <Text>{name}</Text>
    </Container>
  );
};

export default CharacterItem;
