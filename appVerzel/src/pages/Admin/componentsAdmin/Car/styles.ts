import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 126px;

  background-color: ${({theme}) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Content = styled.TouchableOpacity`
  width: 80%;
  height: 126px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(20)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View``;

export const PriceText = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: 'ArchivoNarrow-Medium';
  color: ${({theme}) => theme.colors.main};
  font-size: ${RFValue(20)}px;
`;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;

export const RemoveButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.4);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;
