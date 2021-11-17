//import {useNavigation} from '@react-navigation/core';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';

import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

import {StatusBar} from 'react-native';
import {ICar} from '../HomeAdmin';
import Icon from '../../../assets/camera.svg';

import {
  Container,
  Header,
  HeaderContent,
  Buttons,
  ButtonsText,
  TitleHeader,
  Content,
  CarImage,
  ButtonImage,
} from './styles';
import api from '../../../services/api';

interface Params {
  car: ICar;
}

const CreateImageCar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {car} = route.params as Params;

  function handleGoBacke() {
    navigation.goBack();
  }

  const handleUpdateCarImage = useCallback(() => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      }

      const img = response.assets?.find(img => {
        return {
          uri: img.uri,
        };
      });

      const data = new FormData();

      data.append('imageCar', {
        type: 'image/jpg',
        name: `${car.id}.jpg`,
        uri: img?.uri,
      });

      api.patch(`/carsAdmin/imageCar/${car.id}`, data);

      navigation.goBack();
    });
  }, [car, navigation]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Buttons onPress={handleGoBacke}>
            <ButtonsText>Voltar</ButtonsText>
          </Buttons>
          <TitleHeader>Adicionar Images</TitleHeader>
        </HeaderContent>
      </Header>
      <Content>
        <CarImage
          source={{
            uri: car.imageCar_Url,
          }}
        />
        <ButtonImage onPress={handleUpdateCarImage}>
          <Icon width={30} height={30} />
        </ButtonImage>
      </Content>
    </Container>
  );
};

export default CreateImageCar;
