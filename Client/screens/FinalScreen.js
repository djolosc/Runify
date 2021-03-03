import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: 'Home',
    id: 21,
  },
];

const FinalScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text={'Home'}
        handlePress={() => navigation.navigate('FirstScreen')}
      />
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

export default FinalScreen;
