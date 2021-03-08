import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';

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

export default function Home({ totalKilometers, navigation, allRoutes }) {
  const [currentWeather, setCurrentWeather] = useState({});
  const [favouriteRoutes, setFavouriteRoutes] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const getFavouriteRoute = () => {
    const selectedRoute = allRoutes.filter((route) => {
      return route.favourite === true;
    });
    setFavouriteRoutes(selectedRoute);
  };

  console.log('allRoutes', allRoutes);
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
  }, []);

  useEffect(() => {
    getFavouriteRoute();
  }, [allRoutes]);

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
        <View style={styles.flatListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.listHeaderContainer}>
                <Text style={styles.listHeaderText}>Favourites</Text>
              </View>
            }
            stickyHeaderIndices={[0]}
            data={favouriteRoutes}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Text style={styles.flatListText}>{item.routeName}</Text>
            )}
          />
        </View>
        <View
          style={{
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
    fontFamily: 'Geeza Pro',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    height: 70,
    width: 345,
    margin: 10,
    marginTop: 25,
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
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 300,
  },
  flatListText: {
    margin: 5,
    marginLeft: 30,
    fontFamily: 'Geeza Pro',
    fontSize: 25,
    fontWeight: '700',
  },
  listHeaderText: {
    fontFamily: 'Geeza Pro',
    fontSize: 40,
    fontWeight: '800',
    margin: 3,
    marginLeft: 5,
  },
  listHeaderContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
  },
});
