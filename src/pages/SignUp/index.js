import React from 'react'
import { Text, View } from 'react-native'

import Background from '~/components/Background'
import Input from '~/components/Input'
import Button from '~/components/Button'

export default function SignUp({navigation}) {
 
  return (      
    <Background>      
      <Text>CADASTRO</Text>
      <Input style={{marginTop: 30}} icon='call' placeholder="Digite seu nome"></Input>
      <Button>Entrar</Button>
    </Background>    
  )
}

