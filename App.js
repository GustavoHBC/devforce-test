import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { StatusBar } from 'expo-status-bar';

import Home from './views/Home';
import Character from './views/Character';
import Episode from './views/Episode';

const { Navigator, Screen } = createNativeStackNavigator();

const optionsDefault = {
  options: { headerShown: false, gestureEnabled: false },
};

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} {...optionsDefault} />
          <Screen name="Character" component={Character} {...optionsDefault} />
          <Screen name="Episode" component={Episode} {...optionsDefault} />
        </Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  );
}
