import React, {useEffect, useState} from "react";
import Background from "~/components/Background";
import api from "~/services/api";

import {Container, Title, List} from "./styles";

import Appointment from "~/components/Appointment";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  async function handleCancelAppointment(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get("/appointments");

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={appointment => String(appointment.id)}
          renderItem={({item}) => (
            <Appointment
              data={item}
              onCancel={() => handleCancelAppointment(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
};

Dashboard.navigationOptions = {
  tabBarLabel: "Agendamentos",
};

export default Dashboard;
