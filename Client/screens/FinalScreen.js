import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import MapView, { Polyline, Marker } from 'react-native-maps';
import SpotifyIcon from '../svg/spotify-brands.svg';
import HomeIcon from '../svg/home-solid.svg';
import PaperPlane from '../svg/paper-plane-solid.svg';
import FullHeart from '../svg/heart-solid.svg';
import EmptyHeart from '../svg/heart-regular.svg';
import apiService from '../ApiService';

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

  const handleSetFavourite = () => {
    isLiked
      ? apiService.setNotFavourite(runningRoute)
      : apiService.setFavourite(runningRoute);
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

      <View style={styles.totalRunContainer}>
        <View style={{ marginTop: 5, margin: 4 }}>
          <Text style={styles.totalRunText}>How long have you run today?</Text>
        </View>
        <TextInput
          placeholder="Km"
          style={styles.kmInput}
          onChangeText={(number) => {
            setInputValue(number);
          }}
          value={inputValue}
          keyboardType="decimal-pad"
        />
        <Button
          buttonStyle={styles.submitButton}
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
        <View style={styles.infoAndHeartContainer}>
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
            style={{ width: 300, height: 300, borderRadius: 10 }}
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
            <Image style={styles.spotifyPlaylistImage} source={playlist.img} />
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
            <ScrollView>
              <Text style={styles.modalText}>{runningRoute.description}</Text>
            </ScrollView>
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
    backgroundColor: '#1E2022',
  },
  headerText: {
    color: 'white',
    height: 160,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: '800',
    fontSize: 40,
    textAlign: 'left',
    fontFamily: 'Geeza Pro',
    alignSelf: 'stretch',
  },

  totalRunContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },

  totalRunText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Geeza Pro',
    fontSize: 17,
  },

  kmInput: {
    width: 50,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'white',
  },

  submitButton: {
    backgroundColor: 'white',
    width: 50,
    borderRadius: 10,
  },

  infoAndHeartContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: 325,
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  playlist: {
    width: 300,
    height: 90,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#1E2022',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
  },

  spotifyPlaylistImage: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
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
    color: '#F0F5F9',
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
    padding: 30,
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
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
  },

  homeButton: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#f0f5f9',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginRight: 13,
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
    backgroundColor: '#f0f5f9',
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
    color: '#1E2022',
    fontWeight: '500',
  },

  result: {
    height: 500,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5f9',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default FinalScreen;
