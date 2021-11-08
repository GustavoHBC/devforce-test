import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import {
  Header,
  HeaderText,
  Body,
  Image,
  ErrorBox,
  ErrorTitle,
  ErrorText,
} from './styles';
import theme from '../../constants/theme';

import { Entypo } from '@expo/vector-icons';

const Layout = ({ error, loading, goBack, onHomePress, children }) => {
  const route = useRoute();

  const content = () => {
    if (!!loading) {
      return <ActivityIndicator size="large" color={theme.white} />;
    }

    if (!!error) {
      return (
        <>
          <Entypo name="circle-with-cross" size={76} color={theme.errorColor} />
          <ErrorBox>
            <ErrorTitle>Network Error</ErrorTitle>
            <ErrorText>
              Please check your internet connection and try again.
            </ErrorText>
          </ErrorBox>
        </>
      );
    }

    return children;
  };

  return (
    <ThemeProvider theme={theme}>
      <Header hasGoBack={!!goBack}>
        {!!goBack && (
          <Entypo
            name="chevron-thin-left"
            size={24}
            color={theme.white}
            onPress={goBack}
          />
        )}
        {route.name === 'Home' ? (
          <Image source={require('../../assets/logo.png')} />
        ) : (
          <HeaderText>{route.name}</HeaderText>
        )}
        {!!onHomePress ? (
          <Entypo
            name="home"
            size={24}
            color={theme.white}
            onPress={onHomePress}
          />
        ) : (
          <View />
        )}
      </Header>
      <Body loading={!!loading} error={!!error}>
        {content()}
      </Body>
    </ThemeProvider>
  );
};

export default Layout;
