import { Platform, NativeModules } from 'react-native';
import styled from 'styled-components/native';

const { StatusBarManager } = NativeModules;
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export const Header = styled.View`
  padding: ${statusBarHeight * 1.25}px ${statusBarHeight / 4}px
    ${statusBarHeight / 2}px;
  background-color: ${props => props.theme.backgroundColorDark};
  flex-direction: ${props => (props.hasGoBack ? 'row' : 'column')};
  justify-content: ${props => (props.hasGoBack ? 'space-between' : 'center')};
`;

export const HeaderText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-size: ${props => props.theme.fontSizeLarge};
  text-align: center;
`;

export const Body = styled.View`
  padding: ${statusBarHeight / 2}px;
  background-color: ${props => props.theme.backgroundColor};
  flex: 1;

  ${props =>
    (!!props.loading || !!props.error) &&
    `
    align-items: center;
    justify-content: center;
    `}
`;

export const ErrorBox = styled.View`
  padding: 0 12px 8px;
  border-radius: 12px;
  align-items: center;
`;

export const ErrorTitle = styled.Text`
  color: ${props => props.theme.secondaryTextColor};
  font-size: ${props => props.theme.fontSizeHuge};
`;

export const ErrorText = styled.Text`
  color: ${props => props.theme.secondaryTextColor};
  font-size: ${props => props.theme.fontSizeLarge};
  text-align: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  resize-mode: contain;
`;
