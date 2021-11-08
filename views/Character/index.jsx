import React from 'react';
import { FlatList, View } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import {
  Row,
  Divider,
  CharImage,
  Title,
  Text,
  InfoContainer,
  OriginContainer,
} from './styles';
import Layout from '../../components/Layout';
import EpisodeItem from '../../components/EpisodeItem';

import { useQuery, gql } from '@apollo/client';
import theme from '../../constants/theme';

const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        type
        dimension
      }
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

const Character = ({ route, navigation: { goBack, popToTop, navigate } }) => {
  const { id } = route.params;

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  const iconProps = {
    size: 28,
    color: theme.secondaryTextColor,
  };

  const GenderIcon = {
    Female: <Ionicons name="ios-female" {...iconProps} />,
    Male: <Ionicons name="ios-male" {...iconProps} />,
    Genderless: <FontAwesome name="genderless" {...iconProps} />,
    unknown: <AntDesign name="questioncircleo" {...iconProps} />,
  };

  return (
    <Layout
      error={error}
      loading={loading}
      goBack={goBack}
      onHomePress={popToTop}
    >
      <Title name>{data?.character.name}</Title>
      <Divider />
      <Row withimage>
        <CharImage
          source={{
            uri: data?.character.image,
          }}
        />
        <InfoContainer>
          <View>
            <Row center spaceBetween>
              <Text>Gender: </Text>
              <Text right>
                {GenderIcon[data?.character.gender || 'unknown']}
              </Text>
            </Row>
            <Row center spaceBetween>
              <Text>Status: </Text>
              <Text right>{data?.character.status}</Text>
            </Row>
            <Row center spaceBetween>
              <Text>Specie: </Text>
              <Text right>{data?.character.species}</Text>
            </Row>
            {!!data?.character.type && (
              <Row center spaceBetween>
                <Text>Type: </Text>
                <Text right>{data?.character.type}</Text>
              </Row>
            )}
          </View>
        </InfoContainer>
      </Row>

      <OriginContainer>
        <Title>Origin</Title>
        <Row center spaceBetween withimage>
          <Text>Type: </Text>
          <Text info>{data?.character.origin.type}</Text>
        </Row>
        <Row center spaceBetween withimage>
          <Text>Dimension: </Text>
          <Text info>{data?.character.origin.dimension}</Text>
        </Row>
        <Row center spaceBetween withimage>
          <Text>Name: </Text>
          <Text info>{data?.character.origin.name}</Text>
        </Row>
      </OriginContainer>

      <Divider />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.character.episode}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <EpisodeItem
            onPress={() =>
              navigate('Episode', {
                id: item.id,
              })
            }
            {...item}
          />
        )}
        ListHeaderComponent={
          <Row center spaceBetween>
            <Title>Episodes with this character</Title>
            <Text fontSize="small">
              Total: {data?.character.episode.length}
            </Text>
          </Row>
        }
      />
    </Layout>
  );
};

export default Character;
