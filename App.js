import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import spaceTraders from './screens/SpaceTraders';
import LoginScreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name='LoginScreen' component={LoginScreen}/>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
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