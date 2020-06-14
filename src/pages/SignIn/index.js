import React from 'react'
import { Image } from 'react-native'

import Background from '~/components/Background'

import {Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles'

import logo from '~/assets/logo.png'

export default function SignIn({navigation}) {
  return (
    <Background>
      <Container>
      <Image source={logo} />
      <Form>
        <FormInput 
        icon='mail-outline' 
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Digite seu e-mail'
        />
        <FormInput 
        icon='lock-outline' 
        secureTextEntry        
        placeholder='Sua senha secreta'
        />
      <SubmitButton>
        Acessar
      </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.push('SignUp')}>
        <SignLinkText>Criar uma conta</SignLinkText>
      </SignLink>

      </Container>
    </Background>
  )
}


