import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PreLogin from '../screens/PreLogin';

const Stack = createStackNavigator();

export function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="PreLogin" component={PreLogin} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

