import React from 'react';
import { Container, TextContainer, Text, Description, Image } from './styles';

const CharacterItem = ({ image, name, species, type, size, onPress }) => {
  return (
    <Container
      size={size}
      onPress={() => !!onPress && onPress()}
      activeOpacity={0.6}
    >
      <Image source={{ uri: image }} hasType={!!type} size={size} />
      <TextContainer size={size}>
        <Text>{name}</Text>
        <Description>Specie: {species}</Description>
        {!!type && <Description type={!!type}>Type: {type}</Description>}
      </TextContainer>
    </Container>
  );
};

export default CharacterItem;
