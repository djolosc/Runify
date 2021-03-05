import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Where would you like to run?</Text>
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
                  scenery: item.scenery,
                }));

                navigation.navigate('ThirdQuestion');
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

export default SecondQuestion;
