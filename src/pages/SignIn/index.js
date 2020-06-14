import React, {useRef} from 'react'
import { Image } from 'react-native'

import Background from '~/components/Background'

import {Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles'

import logo from '~/assets/logo.png'

export default function SignIn({navigation}) {
  const passwordRef = useRef()

  function handleSubmit() {
    
  }
  
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
        returnKeyType='next'
        onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput 
        icon='lock-outline' 
        secureTextEntry        
        placeholder='Sua senha secreta'
        ref={passwordRef}
        returnKeyType='send'
        onSubmitEditing={handleSubmit}


        />
      <SubmitButton onPress={handleSubmit}>
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


