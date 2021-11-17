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
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 334px;
  height: 170px;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const ButtonImage = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  background-color: ${({theme}) => theme.colors.title2};
`;
