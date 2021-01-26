import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import chair from '../../../assets/cadeira.png';
import Fonts from '../../constants/Fonts';


export default function ItemCart() {
    return(
        <View style={{ backgroundColor: '#2a2b47', width: '100%', flexDirection: 'row', padding: 6, borderRadius: 15, alignItems: 'center', marginBottom: 15 }}>
            <View style={{ backgroundColor: '#131432', width: '30%', height: 110, borderRadius: 15 }}>
                <Image source={chair} height={110} style={{ height: '95%', width: '100%' }} resizeMode="contain" />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
                <Text style={{ fontFamily: Fonts.main, fontSize: 16, color: '#fff' }} ellipsizeMode="tail" numberOfLines={1}>Cadeira chique</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#1f203c', height: 25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                        <Text style={{ fontFamily: Fonts.main, color: '#fff' }}>-</Text>
                    </TouchableOpacity>

                    <Text style={{ fontFamily: Fonts.main, fontSize: 16, color: '#fff', marginRight: 8 }}>02</Text>

                    <TouchableOpacity style={{ backgroundColor: '#1f203c', height: 25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: Fonts.main, color: '#fff' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, marginRight: 15 }}>
                <Text style={{ color: '#f44736', fontSize: 22, fontFamily: Fonts.main }}>R$280</Text>
            </View>
        </View>
    )
} 