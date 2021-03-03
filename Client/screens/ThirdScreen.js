import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import CustomButton from '../components/CustomButton';

const BUTTONS = [
  {
    text: "LET'S RUN",
    id: 20,
  },
  {
    text: 'So, so...',
    id: 30,
  },
];

const ThirdScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>ENERGIZED?</Text>
      </View>
      <View>
        <FlatList
          data={BUTTONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CustomButton
              text={item.text}
              handlePress={() => navigation.navigate('FinalScreen')}
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

export default ThirdScreen;
