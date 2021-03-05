import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import CustomButton from '../components/CustomButton';
export default function Home({ navigation, totalKilometers }) {
  // const getWeather = async () => {
  //   return fetch()
  // };

  return (
    <SafeAreaView>
      <Text>Hej Đorđe, how are you today?</Text>
      <Text>Your totale kilometers: {totalKilometers}</Text>
      <CustomButton
        text={"Let's run"}
        handlePress={() => navigation.navigate('FirstQuestion')}
      />
    </SafeAreaView>
  );
}
