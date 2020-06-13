import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

const AuthStack = createStackNavigator()

const AuthFlow = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  )
}

export default AuthFlow;