import React from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider } from "native-base";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Vistas
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AcountVerify from "./views/AcountVerify";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AcountVerify">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Iniciar Sesión",
                headerShown: false
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "Registrarme",
                headerShown: false
              }}
            />
            <Stack.Screen
              name="AcountVerify"
              component={AcountVerify}
              options={{
                title: "Verificar Cuenta",
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}

export default App