import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header';
import Fonts from '../../constants/Fonts';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import ProductCard from '../../components/ProductCard';
import { screenWidth } from '../../constants/Screen';
import chair from '../../../assets/cadeira.png';
import { Image } from 'react-native';
import OfferCard from '../../components/OfferCard';

export default function CartScreen({ navigation }) {
    const [search, setSearch] = useState('')

    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="goBack" text="Carrinho" navigation={navigation}/>
            <View style={{ paddingHorizontal: 18 }}>
            </View>   
        </View>
    );
}