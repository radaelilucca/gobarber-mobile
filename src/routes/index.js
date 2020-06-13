import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthFlow from './AuthFlow'
import AppStack from './AppStack'

const logged = false;

export default function Routes(){
  return (
    <NavigationContainer>
    { logged ? <AppStack/> : <AuthFlow/>}
    </NavigationContainer>
  )
}
