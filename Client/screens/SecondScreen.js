import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: 'River Run',
    id: 2,
  },
  {
    text: 'Forest Run',
    id: 4,
  },
  {
    text: 'Scenic Run',
    id: 6,
  },
  {
    text: 'City Run',
    id: 8,
  },
];

const SecondScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Where would you like to run?</Text>
      </View>
      <View>
        <FlatList
          data={BUTTONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CustomButton
              text={item.text}
              handlePress={() => navigation.navigate('ThirdScreen')}
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

export default SecondScreen;
