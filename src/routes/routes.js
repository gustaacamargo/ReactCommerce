import React, { useEffect, useState } from 'react'
import { useStore } from '../reducer'
import Drawer from './drawer.routes'
import { Auth } from './stack.routes'
import { NavigationContainer } from '@react-navigation/native'

export default function Routes() {
    const { userLogged: { userLogged } } = useStore()
    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        if(userLogged.id) {
            setIsLogged(true)
        }
    }, [userLogged])

    return (
        <NavigationContainer>
            {!isLogged ? (
                <>{Auth()}</>
            ) : (
                <>{Drawer()}</>
            )}
        </NavigationContainer>
    )
}