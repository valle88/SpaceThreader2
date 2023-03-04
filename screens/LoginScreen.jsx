import React from 'react'
import { Pressable, View, Text } from 'react-native'


const LoginScreen = () => {
  return (
    <View>
        <Pressable tile='hola'>
            <Text>Login</Text>
        </Pressable>
        <Pressable tile='hola'>
            <Text>Register</Text>
        </Pressable>
    </View>
  )
}

export default LoginScreen
