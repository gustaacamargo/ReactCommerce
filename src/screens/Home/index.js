import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from '../../components/Header';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="drawer" navigation={navigation}/>
            <Text>Home Screen</Text>
        </View>
    );
}