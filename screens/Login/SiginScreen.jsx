import React from 'react'
import { View } from 'react-native'

const SiginScreen = ({setLoginIn}) => {

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
    <View>
      <Text>please enter your token</Text>
      <TextInput
          style={styles.inputContainer}
          onChangeText={onChangeText}
          value={text} 
      />
      <Pressable style={styles.loginBtn} onPress={() => handleLogin()}><Text>Login</Text></Pressable>

    </View>
  )
}

export default SiginScreen
