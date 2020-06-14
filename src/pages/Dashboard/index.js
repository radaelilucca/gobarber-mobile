import React from "react";
import {View, Text} from "react-native";
import Background from "~/components/Background";

const Dashboard = () => {
  return (
    <Background>
      <Text>Dashboard</Text>
    </Background>
  );
};

Dashboard.navigationOptions = {
  tabBarLabel: "Agendamentos",
};

export default Dashboard;
