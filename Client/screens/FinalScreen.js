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
import Modal from 'react-native-modal';
import MapView, { Polyline, Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';

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
      <CustomButton
        text={'Home'}
        handlePress={() => navigation.navigate('Home')}
      />

      <Text style={styles.headerText}>{runningRoute.routeName}</Text>
      <Text>Enjoy your {runningRoute.km}km run</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{
              width: 40,
              height: 30,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={(number) => {
              setInputValue(parseFloat(number));
            }}
            value={inputValue}
            keyboardType="decimal-pad"
          />
          <CustomButton
            text={'Submit'}
            handlePress={() => {
              setTotalKilometers((km) => {
                return (km = km + inputValue);
              });
              setInputValue('');
              Keyboard.dismiss;
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <CustomButton
        text={'Click here for more details'}
        handlePress={() => setModalVisible(true)}
      />
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
          <Text style={styles.playlistText}>Here's your Spotify playlist</Text>
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
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
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
