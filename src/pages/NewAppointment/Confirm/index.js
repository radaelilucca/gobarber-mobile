import React, {useMemo} from "react";
import {useRoute} from "@react-navigation/native";
import {parseISO, formatRelative} from "date-fns";
import pt from "date-fns/locale/pt";

import api from "~/services/api";

import Background from "~/components/Background";

import {Container, Avatar, Name, Time, SubmitButton} from "./styles";

const Confirm = ({navigation}) => {
  const route = useRoute();

  const provider = route.params.provider;
  const time = route.params.time;

  const timeFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), {locale: pt}),
    [time]
  );

  async function handleAddAppointment() {
    await api.post("/appointments", {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate("Dashboard");
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/120/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{timeFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default Confirm;
