import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.theme.backgroundColorDark};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  padding: 6px 10px;
  margin-vertical: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.size === 'small' &&
    `
    width: 48%;
    margin: 4px auto;
    padding: 6px;
  `}
`;

export const TextContainer = styled.View`
  align-items: flex-end;

  ${props =>
    props.size === 'small' &&
    `
    max-width: 60%;
  `}
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.primaryTextColor};
  text-align: right;
`;

export const Description = styled.Text`
  font-size: ${props => props.theme.fontSizeSmall};
  color: ${props => props.theme.secondaryTextColor};
  text-align: right;
  ${props =>
    props.type &&
    `
    width: 80%;
    flex-wrap: wrap;
  `}
`;

export const Image = styled.Image`
  width: ${props => (props.hasType ? '80px' : '70px')};
  height: ${props => (props.hasType ? '80px' : '70px')};
  margin-top: ${props => (props.hasType ? '-30px' : '-20px')};
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  border-radius: 8px;

  ${props =>
    props.size === 'small' &&
    `
    width: 60px;
    height: 60px;
    margin-top: 0;
  `}
`;
