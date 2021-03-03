import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: '5 km',
    id: 5,
  },
  {
    text: '7 km',
    id: 7,
  },
  {
    text: '10 km',
    id: 10,
  },
  {
    text: 'Just a walk',
    id: 999,
  },
];

const FirstScreen = ({ navigation, route }) => {
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CustomButton
              handlePress={() => navigation.navigate('SecondScreen')}
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

export default FirstScreen;
