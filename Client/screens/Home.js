import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
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
      <SafeAreaView>
        <Text>Hej Đorđe, how are you today?</Text>
        <Text>Your total kilometers: {totalKilometers}</Text>
        <CustomButton
          text={"Let's run"}
          handlePress={() => navigation.navigate('FirstQuestion')}
        />
        <View style={styles.icon}>
          <Text>Belgrade</Text>
          <WeatherTag />
          <Text>{Math.round(currentWeather.main.temp)}</Text>
          <Text>{currentWeather.weather[0].description}</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <CustomButton
        text={"Let's run"}
        handlePress={() => navigation.navigate('FirstQuestion')}
      />
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});
