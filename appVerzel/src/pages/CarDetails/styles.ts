import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 35px;
`;
export const BackButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
`;

export const CarImageFrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;
`;
export const CarImage = styled.Image`
  width: 288px;
  height: 132px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalSrollIndicator: false,
})``;
export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;
export const Description = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_detail};
  font-family: 'ArchivoNarrow-Medium';

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: 'ArchivoNarrow-Medium';
`;

export const About = styled.View``;

export const PriceText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_detail};
  font-family: 'ArchivoNarrow-Medium';

  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.main};
  font-family: 'ArchivoNarrow-Medium';
`;

export const Accessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin: 16px;
`;
