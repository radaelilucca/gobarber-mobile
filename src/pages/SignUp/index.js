import React, {useRef} from 'react'
import { Image } from 'react-native'

import Background from '~/components/Background'

import {Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles'

import logo from '~/assets/logo.png'

export default function SignUp({navigation}) {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit() {
    
  }
  
  return (
    <Background>
      <Container>
      <Image source={logo} />
      <Form>
      <FormInput 
        icon='person-outline'         
        autoCorrect={false}        
        placeholder='Seu nome completo'
        returnKeyType='next'
        onSubmitEditing={() => emailRef.current.focus()}

        />
        <FormInput 
        icon='mail-outline' 
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Digite seu e-mail'
        returnKeyType='next'
        ref={emailRef}        
        onSubmitEditing={() => passwordRef.current.focus()}

        />
        <FormInput 
        icon='lock-outline' 
        secureTextEntry        
        placeholder='Sua senha secreta'
        returnKeyType='send'
        ref={passwordRef}
        onSubmitEditing={handleSubmit}
        

        />
      <SubmitButton onPress={handleSubmit}>
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


