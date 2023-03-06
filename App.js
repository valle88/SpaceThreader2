import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from "react";
import HomeScreen from './screens/HomeScreen';
import LoanScreen from './screens/LoanScreen';
import GoodScreen from './screens/GoodScreen';
import RegisterScreen from './screens/Login/RegisterScreen';
import LoginScreen from './screens/Login/LoginScreen';
import SiginScreen from './screens/Login/SiginScreen';
const Drawer = createDrawerNavigator();

export default function App() {

  const [signIn, setSignIn] = useState('');
  const [token, setToken] = useState('')
  return (
    <>
    {
      signIn.length === 0
      ?
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login'>
          <Drawer.Screen name='Login' component={LoginScreen} options={{headerShown: false}  }/>
          <Drawer.Screen name='SignIn'>
            {() => <SiginScreen setSignIn={setSignIn}/>}
          </Drawer.Screen>
          <Drawer.Screen name='Register' component={RegisterScreen} options={{ headerShown: false}} />
        </Drawer.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Loan'>
            {()=> <LoanScreen userToken={token} />}
          </Drawer.Screen>
          <Drawer.Screen name='Good'>
            {()=> <GoodScreen userToken={token} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    
      }
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/* las credenciales nunca se suben al repositiorio git deber estan en el gitignore */