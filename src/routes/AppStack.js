import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Dashboard from '~/pages/Dashboard'
import Profile from '~/pages/Profile'
import NewAppointment from '~/pages/NewAppointment'

const Tabs = createBottomTabNavigator()

const AppStack = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Profile" component={Profile}/>
      <Tabs.Screen name="Dashboard" component={Dashboard}/>
      <Tabs.Screen name="NewAppointment" component={NewAppointment}/>
    </Tabs.Navigator>
  )
}

export default AppStack;