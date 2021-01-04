import React from 'react'
import { Image, Text, View } from 'react-native'
import { screenHeight, screenWidth } from '../../constants/Screen'
import chair from '../../../assets/cadeira.png';
import bedsideLamp from '../../../assets/abajur.png';
import sofa from '../../../assets/sofa.png';
import tv from '../../../assets/tv1.png';
import Fonts from '../../constants/Fonts';

export default function SliderImages({ position = 1 }) {
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

    function image(position) {
        if(position === 1) {
            return chair
        }
        else if(position === 2) {
            return bedsideLamp
        } 
        else if(position === 3) {
            return sofa
        } 
        else if(position === 4) {
            return tv
        } 
        else {
            return chair
        }
    }

    function textPosition() {
        if(position === 1) {
            return 'Escolha entre milhares de produtos'
        }
        else if(position === 2) {
            return 'Adicione produtos ao carrinho'
        }
        else if(position === 3) {
            return 'Acompanhe produtos desejados por meio dos favoritos'
        }
        else if(position === 4) {
            return 'Muitas promoções para aproveitar, faça seu cadastro!'
        }
        else {
            return 'Escolha entre milhares de produtos'
        }
    }
    
    return(
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', }}>
            <Image style={{ width: screenWidth * 0.7, height: screenHeight * 0.6 }} resizeMode="contain" width={screenWidth * 1} height={screenHeight * 0.5} source={image(position)}/>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: '#6e6e86', fontSize: 16.5, fontFamily: Fonts.main }}>{textPosition()}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                {ball(position, 1)}
                {ball(position, 2)}
                {ball(position, 3)}
                {ball(position, 4)}
            </View>
        </View>
    )
}