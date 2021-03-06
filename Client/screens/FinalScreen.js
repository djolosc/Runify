import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import MapView, { Polyline, Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import SpotifyIcon from '../svg/spotify-brands.svg';
import HomeIcon from '../svg/home-solid.svg';
import PaperPlane from '../svg/paper-plane-solid.svg';

const FinalScreen = ({
  navigation,
  runningRoute,
  playlist,
  setTotalKilometers,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ width: 30, height: 30 }}
        onPress={() => navigation.navigate('Home')}
      >
        <HomeIcon />
      </TouchableOpacity>
      <Text style={styles.headerText}>
        Enjoy your {runningRoute.km}km run in {runningRoute.routeName} route
      </Text>
      <CustomButton
        text={'Click here for more info'}
        handlePress={() => setModalVisible(true)}
      />

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          How long have you run today?
        </Text>
        <TextInput
          style={{
            width: 50,
            height: 30,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
          }}
          onChangeText={(number) => {
            setInputValue(number);
          }}
          value={inputValue}
          keyboardType="decimal-pad"
        />
        <Button
          buttonStyle={{
            backgroundColor: 'black',
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
      <View>
        <MapView
          initialRegion={runningRoute.initialRegion}
          style={{ width: 300, height: 300 }}
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
          <Image style={{ width: 100, height: 100 }} source={playlist.img} />
          <Text style={styles.playlistText}>
            Here's your{' '}
            {
              <View style={{ height: 30, width: 30 }}>
                <SpotifyIcon />
              </View>
            }{' '}
            playlist
          </Text>
        </TouchableOpacity>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    margin: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
  },

  playlist: {
    width: 190,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  playlistText: {
    flexWrap: 'wrap',
    fontSize: 30,
    marginLeft: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  modalView: {
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
});

export default FinalScreen;
