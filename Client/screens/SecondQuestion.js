import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';

import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: 'River Run',

    scenery: 'River',
  },
  {
    text: 'Forest Run',

    scenery: 'Forest',
  },
  {
    text: 'Scenic Run',

    scenery: 'Scenic',
  },
  {
    text: 'City Run',

    scenery: 'City',
  },
];

const SecondQuestion = ({ navigation, setPreferences }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../Pictures/background1.jpg')}
      >
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Where would you like to run?</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            horizontal={false}
            numColumns={2}
            contentContainerStyle={styles.buttonsContainer}
            data={BUTTONS}
            keyExtractor={(item) => item.text}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <CustomButton
                text={item.text}
                handlePress={() => {
                  setPreferences((preferences) => ({
                    ...preferences,
                    scenery: item.scenery,
                  }));

                  navigation.navigate('ThirdQuestion');
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

export default SecondQuestion;
