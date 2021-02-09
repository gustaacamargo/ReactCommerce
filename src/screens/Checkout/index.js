import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header';
import ItemCart from '../../components/ItemCart';
import Fonts from '../../constants/Fonts';

export default function CheckoutScreen({ navigation }) {

    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="goBack" text="Pagamento" navigation={navigation}/>
            <View style={{ paddingHorizontal: 18}}>
                <View style={{ paddingHorizontal: 12, backgroundColor: '#191a36', borderRadius: 12, marginTop: 5 }}>
                    <Text style={{ fontFamily: Fonts.mainBold, color: '#FFF', marginVertical: 10, fontSize: 18 }}>Detalhes do pagamento</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontFamily: Fonts.main, color: '#5d5b71', fontSize: 14 }}>Preço total</Text>
                        <Text style={{ fontFamily: Fonts.main, color: '#FFF', fontSize: 14 }}>R$1455</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontFamily: Fonts.main, color: '#5d5b71', fontSize: 14 }}>Taxa de frete</Text>
                        <Text style={{ fontFamily: Fonts.main, color: '#FFF', fontSize: 14 }}>R$25</Text>
                    </View>
                    <View style={{ height: 1, width: '100%', borderColor: '#5d5b71', borderWidth: 0.5, marginVertical: 15 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ fontFamily: Fonts.main, color: '#FFF', fontSize: 16 }}>Total a pagar</Text>
                        <Text style={{ fontFamily: Fonts.main, color: '#FFF', fontSize: 16 }}>R$1480</Text>
                    </View>
                </View>
                
                <View style={{ paddingHorizontal: 12, backgroundColor: '#191a36', borderRadius: 12, marginTop: 25 }}>
                    <Text style={{ fontFamily: Fonts.mainBold, color: '#FFF', marginVertical: 10, fontSize: 18 }}>Endereço de entrega</Text>

                    <TextInput 
                        placeholder="Rua 1, esquina com casa 2"
                        placeholderTextColor="#5d5b71"
                        style={{ 
                            marginBottom: 15,
                            borderColor: '#5d5b71', 
                            borderBottomWidth: 0.5,
                            paddingBottom: 10,
                            fontSize: 16,
                            color: "#FFF",
                            marginTop: 6,
                            fontFamily: Fonts.main
                        }}
                    />
                </View>
            </View>

        </View>
    );
}