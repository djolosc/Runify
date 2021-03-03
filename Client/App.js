import React from 'react';

import FirstScreen from './screens/FirstScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return <FirstScreen />;
}
