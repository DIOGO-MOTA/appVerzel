import React, {useCallback, useRef} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {RFValue} from 'react-native-responsive-fontsize';

import * as Yup from 'yup';

import {useAdminAuth} from '../../../hooks/authAdmin';

import Logo from '../../../assets/Verzel.svg';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';

import {Container, Title, BackToSignIn, BackToSignInText} from './styles';
import {useNavigation} from '@react-navigation/native';

interface signInFormData {
  email: string;
  password: string;
}

const SignInAdmin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const {signInAdmin, userAdmin} = useAdminAuth();
  console.log(userAdmin);

  const handleSignIn = useCallback(
    async (dataAdmin: signInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(dataAdmin, {
          abortEarly: false,
        });

        await signInAdmin({
          email: dataAdmin.email,
          password: dataAdmin.password,
        });

        console.log(signInAdmin);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signInAdmin],
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Logo width={RFValue(408)} height={RFValue(40)} />
            <View>
              <Title>Faça seu Login Admin</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Entrar
              </Button>
            </Form>

            <BackToSignIn onPress={() => navigation.goBack()}>
              <BackToSignInText>Voltar para login </BackToSignInText>
            </BackToSignIn>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignInAdmin;
