import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, TextInput, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Fonts from '../../constants/Fonts';
import { screenHeight, screenWidth } from '../../constants/Screen';
import LottieView from 'lottie-react-native';
import signup from '../../../assets/signup.json'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRef } from 'react';
import Fire from '../../../Fire';
import errorsFirebase from '../../utils/errorsFirebase';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogging, setIsLogging] = useState(false);

    const fullnameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)

    async function signUp() {
        if(!email) { Alert.alert('Campo não preenchido', 'O campo e-mail deve ser preenchido'); return }
        if(!fullname) { Alert.alert('Campo não preenchido', 'O campo nome completo deve ser preenchido'); return }
        if(!password) { Alert.alert('Campo não preenchido', 'O campo senha deve ser preenchido'); return }
        if(!confirmPassword) { Alert.alert('Campo não preenchido', 'O campo confirmar senha deve ser preenchido'); return }

        if(password !== confirmPassword) { Alert.alert('Senha incorreta', 'As senhas digitadas não são iguais!'); return }
        setIsLogging(true);
        await Fire.signUp(email, password)
        .then(() => {
            navigation.navigate('Home')
            setIsLogging(false);
        })
        .catch((error) => {
            setIsLogging(false);
            let err = errorsFirebase(error.code)

            if(err == null) {
                err = error.message
            }

            Alert.alert("Erro ao criar conta", err);
        });
    }

    return(
        <SafeAreaView style={{ backgroundColor: '#131432', flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: screenWidth * 0.1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 30 }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: Fonts.mainBold }}>React</Text>
                    <Text style={{ color: '#f44736', fontSize: 26, fontFamily: Fonts.mainBold }}>Commerce</Text>
                </View>
                
                <KeyboardAwareScrollView extraHeight={screenHeight * 0.09} contentContainerStyle={{ flex: 1 }}>
                    <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 25, marginTop: 35 }}>Cadastre-se!</Text>
                    <View style={{ flex: 1, alignItems: 'flex-start', marginVertical: 15 }}>
                        <LottieView source={signup} resizeMode="contain" loop autoPlay style={{ justifyContent: 'center', alignItems: 'center' }} />
                    </View>
                    <View style={{ marginBottom: 60 }}>
                        <TextInput
                            placeholder="Nome completo"
                            value={fullname}
                            onChangeText={setFullname}
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
                            keyboardType="default"
                            keyboardAppearance="dark"
                            ref={fullnameRef}
                            onSubmitEditing={() => emailRef.current.focus()}
                        />
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
                            ref={emailRef}
                            onSubmitEditing={() => passwordRef.current.focus()}
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
                            ref={passwordRef}
                            onSubmitEditing={() => confirmPasswordRef.current.focus()}
                        />
                        <TextInput
                            placeholder="Confirmar senha"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
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
                            ref={confirmPasswordRef}
                        />
                        <TouchableOpacity onPress={signUp} style={{ 
                            backgroundColor: '#f44736',
                            borderRadius: 12,
                            height: 60,
                            color: '#FFF',
                            fontFamily: Fonts.main,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20,
                            flexDirection: 'row'
                        }}> 
                            <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 22 }}>Cadastrar</Text>
                            {isLogging && <ActivityIndicator style={{ marginLeft: 10 }} color="#FFF" size="small"/>}
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontFamily: Fonts.main, fontSize: 15 }}>Já tem uma conta? </Text>
                    <Text style={{ color: '#f44736', fontFamily: Fonts.main, fontSize: 15 }}>Faça seu login!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}