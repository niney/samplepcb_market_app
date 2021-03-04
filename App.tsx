import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Login } from './screens/Login';

export type RootStackParamList = {
  login: any
}

const RootStack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}