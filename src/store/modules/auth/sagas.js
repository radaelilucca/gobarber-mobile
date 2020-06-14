import {all, takeLatest, call, put, delay} from "redux-saga/effects";
import {Alert} from "react-native";

import {signInSuccess, signFailure} from "./actions";
import api from "~/services/api";

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert(
        "Erro no login",
        "O usuário não pode ser prestador de serviços."
      );

      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    // delay just for demonstration of loading indicator
    yield delay(400);

    yield put(signInSuccess(token, user));

    // history.push("/dashboard");
  } catch (error) {
    Alert.alert(
      "Falha na autenticação",
      "Verifique seus dados e tente novamente."
    );

    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, "users", {name, email, password});
    Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
    // history.push("/");
  } catch (err) {
    Alert.alert("Falha no cadastro", "Verifique seus dados e tente novamente.");

    yield put(signFailure);
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }
  const {token} = payload.auth;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  // history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
]);
