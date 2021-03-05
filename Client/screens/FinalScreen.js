import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image,
  ActivityIndicator,
} from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import PlaylistDB from '../PlaylistDB';

const FinalScreen = ({ navigation, runningRoute, currentMood }) => {
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    getPlaylist(currentMood);
  }, [currentMood]);

  const getPlaylist = (currentMood) => {
    const selectedPlaylist = PlaylistDB.filter((playlist) => {
      return playlist.name === currentMood;
    });
    setPlaylist(selectedPlaylist[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text={'Home'}
        handlePress={() => navigation.navigate('FirstQuestion')}
      />
      <Text style={styles.headerText}>{runningRoute.routeName}</Text>
      <Text>Enjoy your {runningRoute.km}km run</Text>

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
          <Marker coordinate={runningRoute.coordinates[0]} />
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
});

export default FinalScreen;
