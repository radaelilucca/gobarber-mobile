import React from "react";
import {View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {Container, Left, Avatar, Info, Name, Time} from "./styles";

const Appointment = () => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{uri: "https://api.adorable.io/avatar/50/seupapagaio.png"}}
        />
        <Info>
          <Name>Pedro Luca</Name>
          <Time>Em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
};

export default Appointment;
