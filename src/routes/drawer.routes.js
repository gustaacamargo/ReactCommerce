import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './stack.routes';
import { DrawerContent } from '../components/DrawerContent';

const DrawerN = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerN.Navigator drawerContent={() => <DrawerContent/>}>
      <DrawerN.Screen name="Home" component={Home} />
    </DrawerN.Navigator>
  );
}