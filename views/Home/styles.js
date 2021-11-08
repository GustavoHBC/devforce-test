import styled from 'styled-components/native';

export const LoadingButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.backgroundColorLoading};
  border-radius: 4px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.white};
`;
