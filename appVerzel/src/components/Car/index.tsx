import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  PriceText,
  Price,
  CarImage,
} from './styles';

interface CarData {
  id: string;
  brand: string;
  name: string;
  price: string;
  imageCar_Url: string;
}

interface Props extends RectButtonProps {
  data: CarData;
}

export function Car({data, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <PriceText>Preço</PriceText>
            <Price>{data.price}</Price>
          </Rent>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.imageCar_Url,
        }}
      />
    </Container>
  );
}
