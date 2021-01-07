import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './stack.routes';

const DrawerN = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerN.Navigator>
      <DrawerN.Screen name="Home" component={Home} />
    </DrawerN.Navigator>
  );
}