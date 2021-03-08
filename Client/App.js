import React, { useState, useEffect } from 'react';

import Home from './screens/Home';
import FirstQuestion from './screens/FirstQuestion';
import SecondQuestion from './screens/SecondQuestion';
import ThirdQuestion from './screens/ThirdQuestion';
import FinalScreen from './screens/FinalScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const initialStatePreference = { km: 0, scenery: '' };

export default function App() {
  const [preferences, setPreferences] = useState(initialStatePreference);
  const [runningRoute, setRunningRoute] = useState({});
  const [playlist, setPlaylist] = useState({});
  const [totalKilometers, setTotalKilometers] = useState(0);

  useEffect(() => {
    console.log(preferences);
    console.log('route', runningRoute);
    console.log('playlist', playlist);
  }, [preferences, runningRoute, playlist]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => (
              <Home
                preferences={preferences}
                setPreferences={setPreferences}
                totalKilometers={totalKilometers}
                {...props}
              />
            )}
          </Stack.Screen>

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
              <SecondQuestion setPreferences={setPreferences} {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name="ThirdQuestion" options={{ headerShown: false }}>
            {(props) => (
              <ThirdQuestion
                preferences={preferences}
                setRunningRoute={setRunningRoute}
                setPlaylist={setPlaylist}
                {...props}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="FinalScreen" options={{ headerShown: false }}>
            {(props) => (
              <FinalScreen
                runningRoute={runningRoute}
                playlist={playlist}
                setTotalKilometers={setTotalKilometers}
                {...props}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
