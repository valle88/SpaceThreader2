import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'


const LoginScreen = ({navigation}) => {
   
  return (
    <View style={styles.container} >
        <Pressable style={styles.login}  onPress={()=>navigation.navigate('LoginScreen')}>
            <Text>Login</Text>
        </Pressable>
        <Pressable style={styles.register} >
            <Text>Register</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        alignContent: 'center',
        alignItems: 'center',

    },

    login:{
        margin: 10,
        padding: 10,
        backgroundColor: 'red',
    },
    register:{
        margin: 10,
        padding: 10,
        backgroundColor: 'blue',
    }
})

export default LoginScreen
