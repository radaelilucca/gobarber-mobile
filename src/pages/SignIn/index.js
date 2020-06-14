import React, {useRef, useState} from "react";
import {Image} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import Background from "~/components/Background";
import {signInRequest} from "~/store/modules/auth/actions";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "./styles";

import logo from "~/assets/logo.png";

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.push("SignUp")}>
          <SignLinkText>Criar uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
