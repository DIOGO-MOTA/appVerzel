import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import Icon from '../../../../assets/delete.svg';

import {
  Container,
  Content,
  Details,
  Brand,
  Name,
  About,
  Rent,
  PriceText,
  Price,
  CarImage,
  RemoveButton,
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
  handleDeleteCar: (id: string) => void;
}

export function Car({data, handleDeleteCar, ...rest}: Props) {
  return (
    <Container>
      <Content {...rest}>
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
      </Content>
      <RemoveButton
        testID={`remove-${data.id}`}
        onPress={() => handleDeleteCar(data.id)}>
        <Icon width={18} height={20} />
      </RemoveButton>
    </Container>
  );
}
