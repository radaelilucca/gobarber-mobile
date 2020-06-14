import React from "react";
import {useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";

import AuthFlow from "./AuthFlow";
import AppStack from "./AppStack";

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <NavigationContainer>
      {signed ? <AppStack /> : <AuthFlow />}
    </NavigationContainer>
  );
}
