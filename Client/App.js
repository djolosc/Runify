import React, { useState, useEffect } from 'react';
import IP from './config.js';
import Login from './screens/Login';
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
  const [allRoutes, setAllRoutes] = useState([]);

  const getAllRoutes = () => {
    return fetch(`${IP.IP}/routes`)
      .then((res) => res.json())
      .then((route) => {
        setAllRoutes(route);
      });
  };

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <Login {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => (
              <Home
                allRoutes={allRoutes}
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
                allRoutes={allRoutes}
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
                getAllRoutes={getAllRoutes}
                {...props}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
