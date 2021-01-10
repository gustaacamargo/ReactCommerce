import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import chair from '../../../assets/cadeira.png';
import Fonts from '../../constants/Fonts';

export default function ProductCard({ navigation }) {
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Product', { product: {
            name: "Cadeira"
        } })} style={{ backgroundColor: '#2a2b47', width: 215, borderRadius: 25, height: 310, marginHorizontal: 18, padding: 15}}>
            <TouchableOpacity style={{ backgroundColor: '#f44736', alignSelf: 'flex-end', borderRadius: 200, width: 33, height: 33, alignItems: 'center', justifyContent: 'center' }}>
                <AntDesign name="heart" size={20} color="#fff" />
            </TouchableOpacity>
            <Image style={{ width: 190, height: 180 }} source={chair} width={190} height={180} resizeMode="contain"/>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: Fonts.mainBold, marginTop: 20 }} numberOfLines={1} ellipsizeMode="tail">Cadeira chique</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#f44736', fontSize: 16, fontFamily: Fonts.mainBold }}>R$200</Text>
                <TouchableOpacity style={{ backgroundColor: '#494665', width: 25, height: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}