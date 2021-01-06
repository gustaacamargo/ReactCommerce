import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Fonts from '../../constants/Fonts';
import { screenHeight, screenWidth } from '../../constants/Screen';
import LottieView from 'lottie-react-native';
import hello from '../../../assets/hello.json'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return(
        <SafeAreaView style={{ backgroundColor: '#131432', flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: screenWidth * 0.1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 30 }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: Fonts.mainBold }}>React</Text>
                    <Text style={{ color: '#f44736', fontSize: 26, fontFamily: Fonts.mainBold }}>Commerce</Text>
                </View>
                
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
                    <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 25, marginTop: 35 }}>Bem vindo de volta!</Text>
                    <View style={{ flex: 0.8, alignItems: 'flex-start' }}>
                        <LottieView source={hello} resizeMode="contain" loop autoPlay style={{ justifyContent: 'center', alignItems: 'center' }} />
                    </View>
                    <View style={{ marginBottom: 60 }}>
                        <TextInput
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor="#6d6b80"
                            style={{ 
                                backgroundColor: '#191a36',
                                borderRadius: 12,
                                height: 60,
                                color: '#FFF',
                                paddingLeft: 15,
                                fontFamily: Fonts.main,
                                marginBottom: 20
                            }}
                            keyboardType="email-address"
                            keyboardAppearance="dark"
                        />
                        <TextInput
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="#6d6b80"
                            style={{ 
                                backgroundColor: '#191a36',
                                borderRadius: 12,
                                height: 60,
                                color: '#FFF',
                                paddingLeft: 15,
                                fontFamily: Fonts.main,
                                marginBottom: 20
                            }}
                            secureTextEntry={true}
                            keyboardAppearance="dark"
                        />
                        <TouchableOpacity style={{ 
                            backgroundColor: '#f44736',
                            borderRadius: 12,
                            height: 60,
                            color: '#FFF',
                            fontFamily: Fonts.main,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20
                        }}> 
                            <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 22 }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
                            <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 15 }}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>

                <TouchableOpacity style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 15 }}>Novo por aqui? </Text>
                    <Text style={{ color: '#f44736', fontFamily: Fonts.main, fontSize: 15 }}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}