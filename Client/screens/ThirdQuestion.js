import IP from '../config.js';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: "LET'S RUN",
  },
  {
    text: 'So, so...',
  },
];

const getRoute = (body) => {
  const { km, scenery } = body;
  console.log('km', km);
  console.log('scenery', scenery);
  return fetch(`${IP.IP}/${km}/${scenery}`)
    .then((res) => res.json())
    .then((route) => {})
    .catch((error) => {
      console.error(error);
    });
};

const ThirdQuestion = ({ navigation, preferences, setPreferences }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>ENERGIZED?</Text>
      </View>
      <View>
        <FlatList
          data={BUTTONS}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <CustomButton
              text={item.text}
              handlePress={() => {
                setPreferences((preferences) => ({
                  ...preferences,
                  mood: item.text,
                }));

                getRoute(preferences);
                navigation.navigate('FinalScreen');
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },

  textContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default ThirdQuestion;
