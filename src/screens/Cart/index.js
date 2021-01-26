import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header';
import ItemCart from '../../components/ItemCart';

export default function CartScreen({ navigation }) {

    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="goBack" text="Carrinho" navigation={navigation}/>
            <ScrollView style={{ paddingHorizontal: 18 }}>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
            </ScrollView>   
        </View>
    );
}