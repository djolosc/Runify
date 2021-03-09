import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import PlaylistDB from '../DB/PlaylistDB';
import CustomButton from '../components/CustomButton';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
const BUTTONS = [
  {
    text: '😢',
  },
  {
    text: '😁',
  },
  {
    text: '😫',
  },
  {
    text: '🤩',
  },
];

const ThirdQuestion = ({
  navigation,
  preferences,
  setRunningRoute,
  setPlaylist,
  allRoutes,
}) => {
  const getRoute = (body) => {
    const { km, scenery } = body;
    const selectedRoute = allRoutes.filter((route) => {
      return route.km === km && route.scenery === scenery;
    });
    setRunningRoute(selectedRoute[0]);
  };

  const getPlaylist = (currentMood) => {
    const selectedPlaylist = PlaylistDB.filter((playlist) => {
      return playlist.name === currentMood;
    });
    setPlaylist(selectedPlaylist[0]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../Pictures/background3.png')}
      >
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>How are you feeling?</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            opacity={0.85}
            horizontal={false}
            numColumns={2}
            data={BUTTONS}
            keyExtractor={(item) => item.text}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  getRoute(preferences);
                  getPlaylist(item.text);
                  navigation.navigate('FinalScreen');
                }}
              >
                <View style={styles.button}>
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-in"
                    iterationCount="infinite"
                    style={styles.buttonText}
                  >
                    {item.text}
                  </Animatable.Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    opacity: 0.9,
    alignItems: 'center',
  },
  headerText: {
    color: '#1E2022',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Geeza Pro',
  },
  container: {
    flex: 1,
  },

  textContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    height: 200,
    width: 350,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },

  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F0F5F9',
    height: 125,
    width: 125,
    margin: 22,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },

  buttonText: {
    fontWeight: '800',
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Geeza Pro',
  },
});

export default ThirdQuestion;
