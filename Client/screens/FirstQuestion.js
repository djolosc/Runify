import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import CustomButton from '../components/CustomButton';

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
    km: 0,
  },
];

const FirstQuestion = ({ navigation, preferences, setPreferences }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          How long would you like to run today?
        </Text>
      </View>
      <View>
        <FlatList
          data={BUTTONS}
          keyExtractor={(item) => item.text}
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

export default FirstQuestion;
