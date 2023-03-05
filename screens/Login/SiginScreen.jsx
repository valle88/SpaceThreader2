import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet  } from 'react-native'
import { useState } from "react";
import spaceTraders from '../../services/spaceTraders';

const SiginScreen = ({setSignIn}) => {

  const [text,SetText] = useState('')

  const Login = async () => {
    try{
      const userProfile = await spaceTraders.getUserProfile();
      setSignIn(userProfile);

      alert(`User: ${userProfile.user.username}\nwell authenticated`)

    } catch(err) {
      console.log(err.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text>please enter your token</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={SetText}
        value={text} 
      />
      <Pressable style={styles.buton} onPress={() => Login()}><Text style={styles.butont}>Login</Text></Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    backgroundColor:'#DCDCDC',
    borderBottomColor:'black',
    width:'50%',
    borderRadius: 10,
    margin: 20
  },
  buton:{
    backgroundColor:'#00FA9A',
    width: 60,
    height: 30,
    borderRadius: 10,
   
  },
  butont:{
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    
  }


});

export default SiginScreen
