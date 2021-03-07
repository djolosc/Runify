import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';

import CustomButton from '../components/CustomButton';

function random(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

const FirstQuestion = ({ navigation, preferences, setPreferences }) => {
  const [walkingKm, setWalkingKm] = useState(0);

  useEffect(() => {
    setWalkingKm(random([5, 7, 10]));
  }, [preferences]);

  const BUTTONS = [
    {
      text: '5 km',
      km: 5,
    },
    {
      text: '7 km',
      km: 7,
    },
    {
      text: '10 km',
      km: 10,
    },
    {
      text: 'Just a walk',
      km: walkingKm,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../Pictures/background1.jpg')}
      >
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>
            How long would you like to run today?
          </Text>
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
                handlePress={() => {
                  setPreferences((preferences) => ({
                    ...preferences,
                    km: item.km,
                  }));

                  navigation.navigate('SecondQuestion');
                }}
                text={item.text}
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

export default FirstQuestion;
