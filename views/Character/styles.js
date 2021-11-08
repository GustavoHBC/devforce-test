import styled from 'styled-components/native';

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.backgroundColorLight};
  margin: 0 0 6px;
  border-radius: 10px;
`;

export const CharImage = styled.Image`
  width: 50%;
  height: 200px;
  border-radius: 10px;
`;

export const CharName = styled.Text`
  font-size: ${props => props.theme.fontSizeHuge};
  color: ${props => props.theme.primaryTextColor};
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizeLarge};
  color: ${props => props.theme.primaryTextColor};

  ${props =>
    props.name &&
    `
    font-size: ${props.theme.fontSizeHuge};
  `}
`;

export const InfoContainer = styled.View`
  justify-content: space-between;
  width: 47%;
  margin: 0 8px 4px;
`;

export const OriginContainer = styled.View`
  margin: 8px 0 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  ${props => !props.withimage && 'margin-bottom: 6px;'};
  ${props => props.center && 'align-items: center;'};
  ${props => props.spaceBetween && 'justify-content: space-between;'};
`;

export const Text = styled.Text`
  font-size: ${props =>
    props.fontSize === 'small'
      ? props.theme.fontSizeSmall
      : props.theme.fontSize};
  color: ${props => props.theme.primaryTextColor};

  ${props => props.info && `color: ${props.theme.secondaryTextColor};`};
  ${props =>
    props.right &&
    `
    width: 40%;
    text-align: right;
    color: ${props.theme.secondaryTextColor};
    `};
`;
