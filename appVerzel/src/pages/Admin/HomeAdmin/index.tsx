import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Car} from '../componentsAdmin/Car';

import {useAdminAuth} from '../../../hooks/authAdmin';
import api from '../../../services/api';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderContent,
  CarList,
  Buttons,
  ButtonsText,
  Button,
  ButtonText,
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

const HomeAdmin: React.FC = () => {
  const {signOutAdmin} = useAdminAuth();
  const navigation = useNavigation();

  function handleCreateCar() {
    navigation.navigate('CreateCar');
  }

  function handleCreateImageCar(car: ICar) {
    navigation.navigate('CreateImageCar', {car});
  }

  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    api.get('cars').then(response => {
      const newList = response.data;

      newList.sort((a, b) => a.price - b.price);

      setCars(newList);
    });
  }, [cars]);

  async function handleDeleteCar(id: string): Promise<void> {
    try {
      await api.delete(`/carsAdmin/${id}`);

      setCars(cars.filter(car => car.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Buttons onPress={() => signOutAdmin()}>
            <ButtonsText>Sair</ButtonsText>
          </Buttons>

          <Button>
            <ButtonText onPress={() => handleCreateCar()}>
              Adicionar Carro
            </ButtonText>
          </Button>
        </HeaderContent>
      </Header>
      <CarList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Car
            data={item}
            handleDeleteCar={handleDeleteCar}
            onPress={() => {
              handleCreateImageCar(item);
            }}
          />
        )}
      />
    </Container>
  );
};

export default HomeAdmin;
