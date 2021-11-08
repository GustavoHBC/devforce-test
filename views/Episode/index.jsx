import React from 'react';
import { FlatList } from 'react-native';
import { Divider, Title, Row, Text } from './styles';
import Layout from '../../components/Layout';
import CharacterItem from '../../components/CharacterItem';

import { useQuery, gql } from '@apollo/client';

const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
        species
      }
    }
  }
`;

const Episode = ({ route, navigation: { goBack, popToTop, navigate } }) => {
  const { id } = route.params;

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id },
  });

  return (
    <Layout
      error={error}
      loading={loading}
      goBack={goBack}
      onHomePress={popToTop}
    >
      <Title name>
        {data?.episode.episode} - {data?.episode.name}
      </Title>
      <Divider />
      <Text>Went live on {data?.episode.air_date}.</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.episode.characters}
        numColumns={2}
        renderItem={({ item }) => (
          <CharacterItem
            size="small"
            onPress={() =>
              navigate('Character', {
                id: item.id,
              })
            }
            {...item}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Row center spaceBetween>
            <Title>Characters in this episode</Title>
            <Text fontSize="small">
              Total: {data?.episode.characters.length}
            </Text>
          </Row>
        }
      />
    </Layout>
  );
};

export default Episode;
