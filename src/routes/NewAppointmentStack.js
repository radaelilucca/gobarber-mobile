import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import SelectProvider from "~/pages/NewAppointment/SelectProvider";
import SelectDateTime from "~/pages/NewAppointment/SelectDateTime";
import Confirm from "~/pages/NewAppointment/Confirm";

const NewStack = createStackNavigator();

const NewAppointmentStack = () => {
  return (
    <NewStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: "#fff",
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <NewStack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={({navigation}) => ({
          title: "Selecione o prestador",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Dashboard");
              }}>
              <Icon name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <NewStack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={({navigation}) => ({
          title: "Selecione o horário",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SelectProvider");
              }}>
              <Icon name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <NewStack.Screen name="Confirm" component={Confirm} />
    </NewStack.Navigator>
  );
};

export default NewAppointmentStack;
