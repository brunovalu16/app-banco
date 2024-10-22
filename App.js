import * as React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './home';

const Drawer = createDrawerNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='inicio' screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="inicio" component={HomeScreen} />
          {/* Adicione outras telas aqui, se necessário */}
        </Drawer.Navigator>
      </NavigationContainer>
    
  );
}
  







