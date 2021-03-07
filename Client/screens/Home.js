import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import IP from '../config';

import ChanceFlurries from '../svg/chanceflurries.svg';
import ChanceSnows from '../svg/chancesnow.svg';
import ChanceSleet from '../svg/chancesleet.svg';
import ChanceTstorms from '../svg/chancetstorms.svg';
import Clear from '../svg/clear.svg';
import Cloudy from '../svg/cloudy.svg';
import Flurries from '../svg/flurries.svg';
import Fog from '../svg/fog.svg';
import Hazy from '../svg/hazy.svg';
import MostlyCloudy from '../svg/mostlycloudy.svg';
import MostlySunny from '../svg/mostlysunny.svg';
import Rain from '../svg/rain.svg';
import Sleet from '../svg/sleet.svg';
import Snow from '../svg/snow.svg';
import Sunny from '../svg/sunny.svg';
import Tstorms from '../svg/tstorms.svg';
import PartlySunny from '../svg/partlysunny.svg';
import PartlyCloudy from '../svg/partlycloudy.svg';

export default function Home({ totalKilometers, navigation }) {
  const [currentWeather, setCurrentWeather] = useState({});

  const getWeather = async () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.81540311468594&lon=20.46147372061345&appid=${IP.WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeather(data);
      });
  };

  useEffect(() => {
    getWeather();
    console.log('currentWeather', currentWeather);
  }, []);

  const weather = {
    ChanceFlurries: ChanceFlurries,
    ChanceSnows: ChanceSnows,
    ChanceSleet: ChanceSleet,
    ChanceTstorms: ChanceTstorms,
    Clear: Clear,
    Cloudy: Cloudy,
    Flurries: Flurries,
    Fog: Fog,
    Hazy: Hazy,
    MostlyCloudy: MostlyCloudy,
    MostlySunny: MostlySunny,
    Rain: Rain,
    Sleet: Sleet,
    Snow: Snow,
    Sunny: Sunny,
    Tstorms: Tstorms,
    PartlySunny: PartlySunny,
    PartlyCloudy: PartlyCloudy,
  };

  if (currentWeather.weather) {
    const weatherName = currentWeather.weather[0].main;
    const WeatherTag = weather[weatherName];
    console.log(currentWeather);

    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.weatherWidget}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'normal',
              marginLeft: 12,
              marginTop: 10,
              color: 'white',
              fontFamily: 'Geeza Pro',
            }}
          >
            Belgrade
          </Text>
          <Text
            style={{
              fontSize: 45,
              marginLeft: 12,
              color: 'white',
              fontFamily: 'Geeza Pro',
            }}
          >
            {Math.round(currentWeather.main.temp)}º
          </Text>
          <WeatherTag style={{ height: 30, width: 30, marginLeft: 7 }} />
          <Text
            style={{ marginLeft: 12, color: 'white', fontFamily: 'Geeza Pro' }}
          >
            {currentWeather.weather[0].description}
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              // fontWeight: '800',
              fontSize: 40,
              marginLeft: 15,
              fontFamily: 'GeezaPro-Bold',
            }}
          >
            Welcome back, Đorđe!
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 20,
              marginLeft: 15,
              marginTop: 5,
              fontFamily: 'Geeza Pro',
            }}
          >
            So far, you have totally run {totalKilometers}km
          </Text>
        </View>
        <View
          style={{
            height: 410,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FirstQuestion')}
          >
            <Text style={styles.buttonText}>Let's run!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  weatherWidget: {
    alignSelf: 'flex-end',
    width: 150,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'black',
    borderRadius: 20,
    marginRight: 15,
    marginTop: 10,
  },

  weatherText: {
    marginLeft: 11,
    color: 'white',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    height: 70,
    width: 320,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Geeza Pro',
  },

  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
