import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import Dashboard from "~/pages/Dashboard";
import Profile from "~/pages/Profile";
import NewAppointment from "~/pages/NewAppointment";

const Tabs = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tabs.Navigator
      backBehavior="initialRoute"
      initialRouteName="Profile"
      tabBarOptions={{
        keyboardHidesTabBar: true,

        activeTintColor: "#FFF",
        inactiveTintColor: "rgba(255, 255, 255, 0.6)",

        style: {
          backgroundColor: "#8d41a8",
        },
      }}>
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Meu perfil",
          tabBarIcon: ({color}) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Agendamentos",
          tabBarIcon: ({color}) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="NewAppointment"
        component={NewAppointment}
        options={{tabBarLabel: "Agendar"}}
      />
    </Tabs.Navigator>
  );
};

export default AppStack;
