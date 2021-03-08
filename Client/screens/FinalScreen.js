import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import { Button, withTheme } from 'react-native-elements';
import Modal from 'react-native-modal';
import MapView, { Polyline, Marker } from 'react-native-maps';
import IP from '../config';
import SpotifyIcon from '../svg/spotify-brands.svg';
import HomeIcon from '../svg/home-solid.svg';
import PaperPlane from '../svg/paper-plane-solid.svg';
import FullHeart from '../svg/heart-solid.svg';
import EmptyHeart from '../svg/heart-regular.svg';

const FinalScreen = ({
  navigation,
  runningRoute,
  playlist,
  setTotalKilometers,
  getAllRoutes,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLiked, setIsLiked] = useState(runningRoute.favourite);
  const setFavourite = () => {
    return fetch(`${IP.IP}/setToTrue/${runningRoute._id}`, {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json',
      },
    });
  };

  const setNotFavourite = () => {
    return fetch(`${IP.IP}/setToFalse/${runningRoute._id}`, {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json',
      },
    });
  };

  const handleSetFavourite = () => {
    isLiked ? setNotFavourite() : setFavourite();
    setIsLiked(!isLiked);
    getAllRoutes();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>Home </Text>
        <HomeIcon style={{ height: 20, width: 20 }} />
      </TouchableOpacity>
      <Text style={styles.headerText}>
        Enjoy your {runningRoute.km}km run in {runningRoute.routeName} route
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
        }}
      >
        <View style={{ marginTop: 5, margin: 4 }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontFamily: 'Geeza Pro',
              fontSize: 15,
            }}
          >
            How long have you run today?
          </Text>
        </View>
        <TextInput
          placeholder="Km"
          style={{
            width: 50,
            height: 30,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 7,
            marginLeft: 3,
            marginRight: 3,
            backgroundColor: 'white',
          }}
          onChangeText={(number) => {
            setInputValue(number);
          }}
          value={inputValue}
          keyboardType="decimal-pad"
        />
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            width: 50,
            borderRadius: 10,
          }}
          onPress={() => {
            setTotalKilometers((km) => {
              return (km = km + parseFloat(inputValue));
            });
            setInputValue('');
            Keyboard.dismiss();
          }}
          icon={<PaperPlane style={{ height: 15, width: 15 }} />}
        />
      </View>
      <View style={styles.result}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            width: 325,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.infoButtonText}>Info</Text>
          </TouchableOpacity>

          {
            <TouchableOpacity onPress={handleSetFavourite}>
              {isLiked ? (
                <FullHeart style={{ height: 25, width: 25 }} />
              ) : (
                <EmptyHeart style={{ height: 25, width: 25 }} />
              )}
            </TouchableOpacity>
          }
        </View>

        <View>
          <MapView
            initialRegion={runningRoute.initialRegion}
            style={{ width: 300, height: 300, borderRadius: 5 }}
            provider={MapView.PROVIDER_GOOGLE}
          >
            <Polyline
              coordinates={runningRoute.coordinates}
              strokeWidth={3}
              strokeColor={'#0000FF'}
              geodesic={true}
            />
            <Marker coordinate={runningRoute.coordinates[0]} title={'start'} />
          </MapView>

          <TouchableOpacity
            style={styles.playlist}
            onPress={() => {
              Linking.openURL(playlist.url);
            }}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              source={playlist.img}
            />
            <View style={styles.playlistTextContainer}>
              <SpotifyIcon style={{ height: 35, width: 35, marginBottom: 4 }} />
              <Text style={styles.playlistText}>playlist</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>{runningRoute.description}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    height: 170,
    marginTop: 10,
    marginLeft: 13,
    fontWeight: '800',
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'Geeza Pro',
    alignSelf: 'stretch',
  },

  playlist: {
    width: 300,
    height: 90,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
  },
  playlistTextContainer: {
    marginLeft: 22,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistText: {
    marginBottom: 10,
    fontFamily: 'Geeza Pro',
    fontSize: 37,
    marginLeft: 7,
    color: 'white',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  modalView: {
    fontFamily: 'Geeza Pro',
    height: 400,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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

  homeButton: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginRight: 15,
  },

  homeButtonText: {
    fontFamily: 'Geeza Pro',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 3,
  },

  infoButton: {
    marginLeft: 25,
    marginBottom: 10,
    width: 65,
    height: 27,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    elevation: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoButtonText: {
    fontFamily: 'Geeza Pro',
    fontSize: 18,
    marginTop: 3,
    color: 'black',
    fontWeight: '500',
  },

  result: {
    flex: 1,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.9,
  },
});

export default FinalScreen;
