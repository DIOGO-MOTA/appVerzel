import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({theme}) => theme.colors.header};

  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TitleHeader = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: 'Inter-Regular';
`;

export const Buttons = styled.TouchableOpacity``;

export const ButtonsText = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  justify-content: center;
  padding: 8px 30px;
  position: relative;
`;

export const ContentScroll = styled.ScrollView``;
