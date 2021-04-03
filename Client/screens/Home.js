import React, { useState, useEffect } from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import IP from '../config';
import MapView, { Polyline } from 'react-native-maps';
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
  const [modalInfo, setModalInfo] = useState({});
  const getFavouriteRoute = () => {
    const selectedRoute = allRoutes.filter((route) => {
      return route.favourite === true;
    });
    setFavouriteRoutes(selectedRoute);
  };

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
      <View
        style={{
          flex: 1,
          backgroundColor: '#F0F5F9',
        }}
      >
        <View style={{ marginTop: 47 }}>
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
              style={{
                marginLeft: 12,
                color: 'white',
                fontFamily: 'Geeza Pro',
              }}
            >
              {currentWeather.weather[0].description}
            </Text>
          </View>

          <View style={{ marginTop: 30, marginBottom: 20 }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 40,
                color: '#1E2022',
                fontFamily: 'GeezaPro-Bold',
                textAlign: 'center',
              }}
            >
              RUNIFY
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontFamily: 'HelveticaNeue-Italic',
                textAlign: 'center',
              }}
            >
              - belgrade -
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginTop: 20,
            }}
          >
            <View style={styles.totalRunContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Geeza Pro',
                    fontSize: 90,
                    color: 'white',
                  }}
                >
                  {totalKilometers}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Geeza Pro',
                    fontSize: 20,
                    color: 'white',
                    alignSelf: 'flex-end',
                    marginBottom: 20,
                  }}
                >
                  km
                </Text>
              </View>

              <Text
                style={{
                  fontFamily: 'Geeza Pro',
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',

                  height: '20%',
                }}
              >
                total
              </Text>
            </View>

            <View style={styles.flatListContainer}>
              <View style={styles.listHeaderContainer}>
                <Text style={styles.listHeaderText}>Favourites</Text>
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={favouriteRoutes}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setModalInfo(item);
                        setModalVisible(true);
                      }}
                    >
                      <Text style={styles.flatListText}>{item.routeName}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{ alignSelf: 'center', marginTop: 35 }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('FirstQuestion');
              }}
            >
              <Text style={styles.buttonText}>Find a route</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Modal
            modalInfo={modalInfo}
            isVisible={isModalVisible}
            onBackdropPress={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.modalView}>
              <MapView
                initialRegion={modalInfo.initialRegion}
                style={{ width: 300, height: 300, borderRadius: 10 }}
                provider={MapView.PROVIDER_GOOGLE}
              >
                <Polyline
                  coordinates={modalInfo.coordinates}
                  strokeWidth={3}
                  strokeColor={'#0000FF'}
                  geodesic={true}
                />
                {/* <Marker coordinate={modalInfo.coordinates[0]} title={'start'} /> */}
              </MapView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  width: 300,
                }}
              >
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalText}>{modalInfo.routeName}</Text>
                </View>
                <Text style={styles.kmText}>{modalInfo.km}km</Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>
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
    backgroundColor: '#1E2022',
    borderRadius: 20,
    marginRight: 15,
    marginTop: 10,
  },

  weatherText: {
    marginLeft: 11,
    color: '#f0f5f9',
    fontFamily: 'Geeza Pro',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#1E2022',

    height: 70,
    width: 345,
    margin: 10,
    marginTop: 15,
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f0f5f9',
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
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: '#c9d6df',
    borderRadius: 20,
    height: 300,
    width: 150,
  },
  flatListText: {
    margin: 3,
    marginTop: 4,
    marginLeft: 10,
    fontFamily: 'Geeza Pro',
    fontSize: 18,
    fontWeight: '600',
    color: '#1E2022',
  },
  listHeaderText: {
    textAlign: 'center',
    fontFamily: 'Geeza Pro',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 3,
    marginLeft: 8,
  },
  listHeaderContainer: {
    backgroundColor: '#c9d6df',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  totalRunContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: 150,
    height: 150,
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: '#1E2022',
    borderRadius: 20,
  },

  modalView: {
    fontFamily: 'Geeza Pro',
    height: 420,
    width: 350,
    margin: 20,
    backgroundColor: '#F0F5F9',
    borderRadius: 20,
    padding: 30,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginTop: 11,
    fontFamily: 'Geeza Pro',
    fontSize: 30,
    color: '#1E2022',
    fontWeight: '600',
  },

  modalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    height: 87,
    width: 240,
  },

  kmText: {
    marginTop: 3,
    marginLeft: 12,
    fontFamily: 'Geeza Pro',
    fontSize: 20,
    color: '#1E2022',
    fontWeight: '300',
  },
});
