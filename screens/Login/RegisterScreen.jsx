import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from "react";
const RegisterScreen = () => {

  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container} >
      <Text >Please, enter if namenick</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable onPress={() => console.log('Register')}>
        <Text>Register</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 150,


  },
  textInput:{
    margin:20,
    backgroundColor: '#C0C0C0',
    width: 150,
    borderRadius: 10
  }
})
export default RegisterScreen
