import React, { useState, useEffect } from 'react';

import FirstQuestion from './screens/FirstQuestion';
import SecondQuestion from './screens/SecondQuestion';
import ThirdQuestion from './screens/ThirdQuestion';
import FinalScreen from './screens/FinalScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const initialStatePreference = { km: 0, scenery: '' };

export default function App() {
  const [preferences, setPreferences] = useState(initialStatePreference);
  const [runningRoute, setRunningRoute] = useState({});
  const [currentMood, setCurrentMood] = useState('');

  useEffect(() => {
    console.log(preferences);
    console.log('route', runningRoute);
    console.log('currentMood', currentMood);
  }, [preferences, runningRoute, currentMood]);
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
              setCurrentMood={setCurrentMood}
              setRunningRoute={setRunningRoute}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FinalScreen" options={{ headerShown: false }}>
          {(props) => (
            <FinalScreen
              runningRoute={runningRoute}
              currentMood={currentMood}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
