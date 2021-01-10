import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import chair from '../../../assets/cadeira.png';
import Fonts from '../../constants/Fonts';


export default function OfferCard() {
    return(
        <TouchableOpacity style={{ backgroundColor: '#2a2b47', width: '100%', height: 100, borderRadius: 15, alignItems: 'center', flexDirection: 'row', marginBottom: 16 }}>
            <Image source={chair} style={{ height: 90, width: '25%' }} width="25%" height={90}/>
            <View>
                <Text style={{ color: '#fff', fontSize: 14, fontFamily: Fonts.mainBold, marginBottom: 5 }} numberOfLines={1} ellipsizeMode="tail">Cadeira chique top</Text>
                <Text style={{ color: '#575a6d', fontSize: 14, fontFamily: Fonts.mainBold, marginBottom: 5 }} numberOfLines={1} ellipsizeMode="tail">Loja do zé</Text>
                <Text style={{ color: '#f44736', fontSize: 14, fontFamily: Fonts.mainBold }} numberOfLines={1} ellipsizeMode="tail">R$ 200</Text>
            </View>
        </TouchableOpacity>
    )
} 