import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header';
import Fonts from '../../constants/Fonts';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import ProductCard from '../../components/ProductCard';

export default function HomeScreen({ navigation }) {
    const [search, setSearch] = useState('')

    return (
        <View style={{ backgroundColor: '#131432', flex: 1 }}>
            <Header goTo="drawer" navigation={navigation}/>
            <View style={{ paddingHorizontal: 18 }}>
                <Text style={{ color: '#fff', fontSize: 26, fontFamily: Fonts.mainBold, marginTop: 20 }}>Selecione </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: Fonts.mainBold }}>vários </Text>
                    <Text style={{ color: '#f44736', fontSize: 26, fontFamily: Fonts.mainBold }}>produtos</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <Ionicons style={{ position: 'absolute', zIndex: 1, paddingLeft: 10 }} name="search-outline" size={24} color="#6d6b80" />
                        <TextInput
                            placeholder="Pesquisar"
                            value={search}
                            onChangeText={setSearch}
                            placeholderTextColor="#6d6b80"
                            style={{ 
                                marginTop: 20,
                                backgroundColor: '#191a36',
                                borderRadius: 12,
                                height: 50,
                                flex: 1,
                                color: '#FFF',
                                paddingLeft: 45,
                                fontFamily: Fonts.main,
                                marginBottom: 20
                            }}
                            returnKeyType="search"
                            keyboardAppearance="dark"
                        />
                    </View>
                    <TouchableOpacity 
                        style={{ 
                            marginTop: 20,
                            backgroundColor: '#191a36',
                            borderRadius: 12,
                            height: 50,
                            alignItems: 'center',
                            paddingHorizontal: 20,
                            marginLeft: 15,
                            justifyContent: 'center',
                            color: '#FFF',
                            fontFamily: Fonts.main,
                            marginBottom: 20,
                        }}
                    >
                        <FontAwesome name="sliders" size={24} color="#6d6b80" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ marginTop: 20 }} horizontal>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ScrollView>
        </View>
    );
}