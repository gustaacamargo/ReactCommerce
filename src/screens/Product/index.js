import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header';

export default function ProdcutScreen({ navigation, route }) {
    const [product, setProduct] = useState(route.params?.product ?? 'Produto')

    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="goBack" text={product.name} navigation={navigation}/>
            
        </View>
    );
}