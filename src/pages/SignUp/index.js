import React from 'react'
import { Image } from 'react-native'

import Background from '~/components/Background'

import {Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles'

import logo from '~/assets/logo.png'

export default function SignUp({navigation}) {
  return (
    <Background>
      <Container>
      <Image source={logo} />
      <Form>
      <FormInput 
        icon='person-outline'         
        autoCorrect={false}        
        placeholder='Seu nome completo'
        />
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
        Criar conta
      </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.push('SignIn')}>
        <SignLinkText>Já tenho uma conta</SignLinkText>
      </SignLink>

      </Container>
    </Background>
  )
}


