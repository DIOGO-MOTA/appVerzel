import React from 'react';

import {Accessory} from '../../components/Accessory';

import Icon from '../../assets/backButton.svg';
import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  BackButton,
  Header,
  CarImageFrapper,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  About,
  PriceText,
  Price,
  Accessories,
} from './styles';
import {useNavigation, useRoute} from '@react-navigation/core';
import {ICar} from '../Home';

interface Params {
  car: ICar;
}

const CarDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {car} = route.params as Params;

  function handleGoBacke() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBacke}>
          <Icon color="#999591" />
        </BackButton>

        <CarImageFrapper>
          <CarImage
            source={{
              uri: car.imageCar_Url,
            }}
          />
        </CarImageFrapper>
      </Header>
      <Content>
        <Details>
          <Description>
            <Brand> {car.brand} </Brand>
            <Name>{car.name}</Name>
          </Description>

          <About>
            <PriceText>Preço</PriceText>
            <Price>{car.price}</Price>
          </About>
        </Details>

        <Accessories>
          <Accessory name={car.mileage} icon={speedSvg} />
          <Accessory name={car.traction} icon={accelerationSvg} />
          <Accessory name={car.direction} icon={forceSvg} />
          <Accessory name={car.fuel} icon={gasolineSvg} />
          <Accessory name={car.streaming} icon={exchangeSvg} />
          <Accessory name={car.port} icon={peopleSvg} />
        </Accessories>
      </Content>
    </Container>
  );
};

export default CarDetails;
