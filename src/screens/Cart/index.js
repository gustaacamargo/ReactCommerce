import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header';
import ItemCart from '../../components/ItemCart';
import Fonts from '../../constants/Fonts';

export default function CartScreen({ navigation }) {

    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="goBack" text="Carrinho" navigation={navigation}/>
            <ScrollView style={{ paddingHorizontal: 18, }}>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
            </ScrollView>   
            <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={{ marginHorizontal: 18, height: 60, backgroundColor: '#f44736', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 35, borderRadius: 12 }}>
                <Text style={{ color: '#fff', fontSize: 23, fontFamily: Fonts.mainBold }}>Ir para o pagamento</Text>
            </TouchableOpacity>
        </View>
    );
}