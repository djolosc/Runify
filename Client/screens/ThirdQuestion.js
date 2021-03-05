import IP from '../config.js';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import db from '../DB';
import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: 'I got dumped!!!',
  },
  {
    text: "I'm annoyed by my parents",
  },
  {
    text: "I'm super stressed",
  },
  {
    text: "I don't have sex",
  },
];

const ThirdQuestion = ({
  navigation,
  preferences,
  setCurrentMood,
  setRunningRoute,
}) => {
  const getRoute = (body) => {
    const { km, scenery } = body;

    const selectedRoute = db.filter((route) => {
      return route.km === km && route.scenery === scenery;
    });
    console.log('selecetedRoute', selectedRoute);
    setRunningRoute(selectedRoute[0]);
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
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Reason to run?</Text>
      </View>
      <View>
        <FlatList
          data={BUTTONS}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <CustomButton
              text={item.text}
              handlePress={() => {
                setCurrentMood(item.text);
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
