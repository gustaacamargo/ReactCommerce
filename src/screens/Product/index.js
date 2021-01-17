import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Header from '../../components/Header';
import { screenWidth } from '../../constants/Screen';
import chair from '../../../assets/cadeira.png';
import Fonts from '../../constants/Fonts';
import ProductCard from '../../components/ProductCard';

export default function ProdcutScreen({ navigation, route }) {
    const [product, setProduct] = useState(route.params?.product ?? 'Produto')

    return (
        <>
            <Header goTo="goBack" text={product.name} navigation={navigation}/>
            <ScrollView style={{ backgroundColor: '#131432', flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: screenWidth * 0.1 }}>
                    <View style={{ backgroundColor: '#2a2b47', width: '100%', height: 300, marginTop: 30, borderRadius: 20 }}>
                        <Image source={chair} height={280} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
                    </View>
                    <Text style={{ color: '#f44736', fontSize: 30, fontFamily: Fonts.mainBold, marginTop: 20 }}>R$280</Text>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: Fonts.main }}>em 12x sem juros </Text>

                    <TouchableOpacity style={{ width: '100%', height: 60, backgroundColor: '#f44736', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 25, fontFamily: Fonts.mainBold }}>Comprar agora</Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: Fonts.main, marginTop: 50 }}>Produtos relacionados </Text>
                </ScrollView>
                <ScrollView style={{ marginBottom: 30, marginTop: 20 }} showsHorizontalScrollIndicator={false} horizontal>
                    <ProductCard navigation={navigation}/>
                    <ProductCard navigation={navigation}/>
                    <ProductCard navigation={navigation}/>
                    <ProductCard navigation={navigation}/>
                </ScrollView>
                
            </ScrollView>
        </>
    );
}