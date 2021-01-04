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

    return(
        <SafeAreaView style={{ backgroundColor: '#131432', flex: 1 }}>
            <View style={{ flex: 0.9, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: Fonts.mainBold }}>React</Text>
                    <Text style={{ color: '#f44736', fontSize: 26, fontFamily: Fonts.mainBold }}>Commerce</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 35, flex: 1 }}>
                    <View style={{ width: screenWidth * 0.9, height: screenWidth * 0.9, borderRadius: 50000, borderWidth: 25, borderColor: '#191a36' }}>

                    </View>
                    <SliderImages position={positionSlider}/>
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