import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

const AuthStack = createStackNavigator()

const navigationOptions = {
  headerShown: false
}

const AuthFlow = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignUp" component={SignUp} options={navigationOptions} />
      <AuthStack.Screen name="SignIn" component={SignIn} options={navigationOptions}/>
    </AuthStack.Navigator>
  )
}

export default AuthFlow;