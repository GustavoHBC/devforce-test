import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 3;
  background-color: ${props => props.theme.backgroundColorDark};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  padding: 6px 10px;
  margin: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${props =>
    props.fontSize === 'small'
      ? props.theme.fontSizeSmall
      : props.theme.fontSize};
  color: ${props =>
    props.fontSize === 'small'
      ? props.theme.secondaryTextColor
      : props.theme.primaryTextColor};
  text-align: center;
`;
