import React, { useState, useEffect } from 'react';

import FirstQuestion from './screens/FirstQuestion';
import SecondQuestion from './screens/SecondQuestion';
import ThirdQuestion from './screens/ThirdQuestion';
import FinalScreen from './screens/FinalScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const initialState = { km: 0, scenery: '', mood: '' };

export default function App() {
  const [preferences, setPreferences] = useState(initialState);
  const [routeName, setRouteName] = useState('');

  useEffect(() => {
    console.log(preferences);
    console.log('route', routeName);
  }, [preferences, routeName]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstQuestion" options={{ headerShown: false }}>
          {(props) => (
            <FirstQuestion
              preferences={preferences}
              setPreferences={setPreferences}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="SecondQuestion" options={{ headerShown: false }}>
          {(props) => (
            <SecondQuestion
              preferences={preferences}
              setPreferences={setPreferences}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ThirdQuestion" options={{ headerShown: false }}>
          {(props) => (
            <ThirdQuestion
              preferences={preferences}
              setPreferences={setPreferences}
              setRouteName={setRouteName}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FinalScreen" options={{ headerShown: false }}>
          {(props) => <FinalScreen routeName={routeName} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
