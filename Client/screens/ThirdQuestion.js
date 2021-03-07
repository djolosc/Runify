import IP from '../config.js';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import db from '../DB/DB';
import PlaylistDB from '../DB/PlaylistDB';
import CustomButton from '../components/CustomButton';

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
}) => {
  const getRoute = (body) => {
    const { km, scenery } = body;

    const selectedRoute = db.filter((route) => {
      return route.km === km && route.scenery === scenery;
    });
    setRunningRoute(selectedRoute[0]);
  };

  const getPlaylist = (currentMood) => {
    console.log('currentMood', currentMood);
    const selectedPlaylist = PlaylistDB.filter((playlist) => {
      return playlist.name === currentMood;
    });
    setPlaylist(selectedPlaylist[0]);
  };

  // const getRoute = (body) => {
  //   const { km, scenery } = body;
  //   return fetch(`${IP.IP}/${km}/${scenery}`)
  //     .then((res) => res.json())
  //     .then((route) => setRouteName(route.routeName))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  //uncomment when you finish the databse!

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../Pictures/background1.jpg')}
      >
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>How are you feeling?</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            horizontal={false}
            numColumns={2}
            data={BUTTONS}
            keyExtractor={(item) => item.text}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <CustomButton
                text={item.text}
                handlePress={() => {
                  getRoute(preferences);
                  getPlaylist(item.text);
                  navigation.navigate('FinalScreen');
                }}
              />
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
});

export default ThirdQuestion;
