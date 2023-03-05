import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'



const LoginScreen = ({navigation}) => {
   
  return (
    <View style={styles.container} >
        <Pressable style={styles.login}  onPress={()=>navigation.navigate('signIn')}>
            <Text>Login</Text>
        </Pressable>
        <Pressable style={styles.register} onPress={() => navigation.navigate('Register')} >
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
        marginTop: 230,
        margin: 10,
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9932CC',
        borderRadius: 10,
    },
    register:{
        margin: 10,
        padding: 10,
        backgroundColor: '#00FF7F',
        borderRadius: 10,
    }
})

export default LoginScreen
