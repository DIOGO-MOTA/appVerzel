import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Car} from '../../components/Car';

import {useAuth} from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  TitleHeader,
  CarList,
  Buttons,
  ButtonsText,
} from './styles';

export interface ICar {
  id: string;
  brand: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
  traction: string;
  fuel: string;
  streaming: string;
  port: string;
  imageCar_Url: string;
  direction: string;
}

const Home: React.FC = () => {
  const {signOut} = useAuth();
  const navigation = useNavigation();

  const [cars, setCars] = useState<ICar[]>([]);

  function handleCarDetails(car: ICar) {
    navigation.navigate('CarDetails', {car});
  }

  useEffect(() => {
    api.get('cars').then(response => {
      const newList = response.data;

      newList.sort((a, b) => a.price - b.price);

      setCars(newList);
    });
  }, [cars]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Buttons onPress={() => signOut()}>
            <ButtonsText>Sair</ButtonsText>
          </Buttons>
          <TitleHeader>Total de {cars.length} carros </TitleHeader>
        </HeaderContent>
      </Header>
      <CarList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Car
            data={item}
            onPress={() => {
              handleCarDetails(item);
            }}
          />
        )}
      />
    </Container>
  );
};

export default Home;
