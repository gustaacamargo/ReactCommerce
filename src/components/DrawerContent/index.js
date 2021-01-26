import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Fonts from '../../constants/Fonts';

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ backgroundColor: '#252642' }} {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image source={{ uri: 'https://avatars.githubusercontent.com/u/32242733?s=460&u=e2dc00603328dd564b3fd4c6b64dca72cd9c3d3f&v=4' }} size={50} />
            <View style={{ marginLeft: 12 }}>
                <Title style={{ fontFamily: Fonts.main, color: '#fff', fontSize: 16 }}>Gustavo camargo</Title>
                <Caption style={{ fontFamily: Fonts.main, color: '#fff', fontSize: 13 }}>@gustaacamargo</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem inactiveTintColor="#fff"
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Categoria"
            onPress={() => {}}
          />
          <DrawerItem inactiveTintColor="#fff"
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Marcas"
            onPress={() => {}}
          />
          <DrawerItem inactiveTintColor="#fff"
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Compras"
            onPress={() => {}}
          />
        </Drawer.Section>

        <Drawer.Section>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text style={{ color: '#fff', fontFamily: Fonts.mainBold }}>Sair</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#252642'
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});