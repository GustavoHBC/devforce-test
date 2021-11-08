import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { LoadingButton, Text } from './styles';
import Layout from '../../components/Layout';
import CharacterItem from '../../components/CharacterItem';
import theme from '../../constants/theme';

import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        species
        type
        image
      }
    }
  }
`;

const Home = ({ navigation: { navigate } }) => {
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [firstLoading, setFirstLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  useEffect(() => {
    if (data) {
      setCurrentCharacters(
        [...currentCharacters, ...data.characters.results].filter(
          (character, index, self) =>
            index === self.findIndex(t => t.id === character.id),
        ),
      );
      setFirstLoading(false);
    }
  }, [data]);

  return (
    <Layout error={error} loading={firstLoading}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={currentCharacters}
        renderItem={({ item }) => (
          <CharacterItem
            onPress={() =>
              navigate('Character', {
                id: item.id,
              })
            }
            {...item}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <LoadingButton
            loading={loading}
            activeOpacity={0.6}
            onPress={() => {
              setPage(page + 1);
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color={theme.white} />
            ) : (
              <Text>Load more</Text>
            )}
          </LoadingButton>
        }
      />
    </Layout>
  );
};

export default Home;
