import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PreLogin from '../screens/PreLogin';
import ProdcutScreen from '../screens/Product';
import CartScreen from '../screens/Cart';
import CheckoutScreen from '../screens/Checkout';

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
      <Stack.Screen options={{ headerShown: false }} name="Product" component={ProdcutScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

