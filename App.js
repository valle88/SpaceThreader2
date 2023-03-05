import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoanScreen from './screens/LoanScreen';
import LoginScreen from './screens/LoginScreen';
import ShipScreen from './screens/ShipScreen';
import RegisterScreen from './screens/Login/RegisterScreen';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    Object.entries(signIn).length === 0
    ?
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
        <Drawer.Screen name='SignIn' options={{headerShown: false}}>
          {() => <SignInScreen setSignIn={setSignIn} />}
        </Drawer.Screen>
        <Drawer.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
    :
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Loan' component={LoanScreen} />
        <Drawer.Screen name='Ships' component={ShipScreen} />
        <Drawer.Screen name='Login' component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
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