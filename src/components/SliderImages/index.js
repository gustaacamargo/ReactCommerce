import React from 'react'
import { Image, Text, View, Animated } from 'react-native'
import { screenHeight, screenWidth } from '../../constants/Screen'
import chair from '../../../assets/cadeira.png';
import bedsideLamp from '../../../assets/abajur.png';
import sofa from '../../../assets/sofa.png';
import tv from '../../../assets/tv1.png';
import { useState, useEffect } from 'react';

export default function SliderImages({ position = 1 }) {
    const [opacity, setOpacity] = useState(new Animated.Value(0))

    function onLoad() {
        opacity.setValue(0)
        Animated.timing(opacity, {
            toValue: 1, 
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        onLoad()
    }, [position])

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

    function returnImage(image) {
        return(
            <Animated.Image
                resizeMode="contain"
                onLoad={onLoad}
                width={screenWidth * 1} 
                height={screenHeight * 0.5}
                source={image}
                style={[
                    {
                        opacity: opacity,
                        transform: [
                            {
                                scale: opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1]
                                })
                            }
                        ]
                    },
                    { 
                        width: screenWidth * 0.7, 
                        maxHeight: screenHeight * 0.36,
                        //backgroundColor: 'red' 
                    }
                ]}
            />
        )
    }

    
    
    return(
        <View style={{ width: screenWidth * 0.9, height: screenWidth * 0.9, borderRadius: 50000, borderWidth: 25, borderColor: '#191a36', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                {returnImage(image(position))}
            </View>
        </View>
    )
}