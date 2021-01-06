import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SliderImages from '../../components/SliderImages';
import Fonts from '../../constants/Fonts';
import { screenHeight, screenWidth } from '../../constants/Screen';
export default function PreLogin({ navigation }) {
    const [positionSlider, setPositionSlider] = useState(1)

    function changePosition() {
        if(positionSlider < 4) {
            setPositionSlider(positionSlider+1)
        }
        else {
            navigation.navigate('Login')
        }
    }

    function ball(position, isWhich) {
        if(position === isWhich) {
            return (
                <View style={{ borderColor: '#f44736', borderWidth: 1, width: screenWidth * 0.03, height: screenWidth * 0.03, borderRadius: 1000, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#f44736', width: screenWidth * 0.02, height: screenWidth * 0.02, borderRadius: 1000 }}/>
                </View>
            )
        }
        return (
            <View style={{ backgroundColor: '#f44736', width: screenWidth * 0.02, height: screenWidth * 0.02, borderRadius: 100, marginRight: 10 }}></View>
        )
    }

    function textPosition() {
        if(positionSlider === 1) {
            return 'Escolha entre milhares de produtos'
        }
        else if(positionSlider === 2) {
            return 'Adicione produtos ao carrinho'
        }
        else if(positionSlider === 3) {
            return 'Acompanhe produtos desejados por meio dos favoritos'
        }
        else if(positionSlider === 4) {
            return 'Muitas promoções para aproveitar, faça seu cadastro!'
        }
        else {
            return 'Escolha entre milhares de produtos'
        }
    }

    return(
        <SafeAreaView style={{ backgroundColor: '#131432', flex: 1 }}>
            <View style={{ flex: 0.9, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: Fonts.mainBold }}>React</Text>
                    <Text style={{ color: '#f44736', fontSize: 26, fontFamily: Fonts.mainBold }}>Commerce</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 35, flex: 1 }}>
                    <SliderImages position={positionSlider}/>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ color: '#6e6e86', fontSize: 16.5, fontFamily: Fonts.main }}>{textPosition()}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    {ball(positionSlider, 1)}
                    {ball(positionSlider, 2)}
                    {ball(positionSlider, 3)}
                    {ball(positionSlider, 4)}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 20, fontFamily: Fonts.main }}>Pular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changePosition} style={{ backgroundColor: '#f44736', width: 70, height: 70, borderRadius: 45, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 20, fontFamily: Fonts.main }}>Próx.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}