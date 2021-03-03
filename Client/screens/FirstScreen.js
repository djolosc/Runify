import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

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
          renderItem={({ item }) => <CustomButton text={item.text} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'yellow',
    height: 60,
    width: 200,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

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
