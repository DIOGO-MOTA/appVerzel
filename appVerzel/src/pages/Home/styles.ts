import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ICar} from '.';

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
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsText = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const TitleHeader = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: 'Inter-Regular';
`;

export const CarList = styled(FlatList as new () => FlatList<ICar>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalSrollIndicator: false,
})``;

export const Buttons = styled.TouchableOpacity``;
