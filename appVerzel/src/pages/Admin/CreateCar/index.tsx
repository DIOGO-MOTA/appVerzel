import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import React, {useCallback, useRef} from 'react';
import {Alert, ScrollView, StatusBar, TextInput} from 'react-native';
import {Form} from '@unform/mobile';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import api from '../../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  Buttons,
  ButtonsText,
  TitleHeader,
  Content,
  ContentScroll,
} from './styles';

interface createCarFormData {
  brand: string;
  model: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
  traction: string;
  fuel: string;
  streaming: string;
  port: string;
  direction: string;
}

const CreateCar: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const createInputRef = useRef<TextInput>(null);

  const handleCreateCar = useCallback(
    async (data: createCarFormData) => {
      try {
        formRef.current?.setErrors({});

        await api.post('/carsAdmin', data);

        Alert.alert('Carro Adicionado com sucesso realizado com sucesso');

        navigation.goBack();
      } catch (err) {
        Alert.alert(
          'Erro ao Adicionar',
          'Ocorreu um erro ao tentar Adicionar o Carro.',
        );
      }
    },
    [navigation],
  );

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Buttons onPress={() => navigation.goBack()}>
            <ButtonsText>Voltar</ButtonsText>
          </Buttons>
          <TitleHeader>Adicionar Carro</TitleHeader>
        </HeaderContent>
      </Header>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Content>
          <Form ref={formRef} onSubmit={handleCreateCar}>
            <ContentScroll>
              <Input
                autoCapitalize="words"
                name="brand"
                placeholder="Marca"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />

              <Input
                autoCapitalize="words"
                name="model"
                placeholder="Modelo"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="name"
                placeholder="nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="price"
                placeholder="preço"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="year"
                placeholder="ano"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="mileage"
                placeholder="quilometragem"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="traction"
                placeholder="tração"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="fuel"
                placeholder="combustível"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="streaming"
                placeholder="transmissão"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="port"
                placeholder="quantas portas"
                returnKeyType="next"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Input
                autoCapitalize="words"
                name="direction"
                placeholder="direção"
                returnKeyType="send"
                onSubmitEditing={() => {
                  createInputRef.current?.focus();
                }}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Adicionar Carro
              </Button>
            </ContentScroll>
          </Form>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default CreateCar;
