import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native';

const RegisterScreen = () => {

  const [text, onChangeText] = useState('');
  
  return (
    <View style={styles.formContainer}>
      <Text style={styles.textBold}>Please, enter if namenick</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable style={styles.registerBtn} onPress={() => console.log('Register')}><Text>Register</Text></Pressable>
    </View>
  )
}

export default RegisterScreen
