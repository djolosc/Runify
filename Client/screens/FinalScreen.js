import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView, { Polyline, Marker } from 'react-native-maps';

import CustomButton from '../components/CustomButton';

const FinalScreen = ({ navigation, runningRoute }) => {
  console.log('This is a running route', runningRoute);
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text={'Home'}
        handlePress={() => navigation.navigate('FirstQuestion')}
      />
      <Text style={styles.headerText}>{runningRoute[0].routeName}</Text>
      <View>
        <MapView
          initialRegion={runningRoute[0].initialRegion}
          style={{ width: 300, height: 300 }}
          provider={MapView.PROVIDER_GOOGLE}
        >
          <Polyline
            coordinates={runningRoute[0].coordinates}
            strokeWidth={3}
            strokeColor={'#0000FF'}
            geodesic={true}
          />
          <Marker coordinate={runningRoute[0].coordinates[0]} />
        </MapView>
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
    justifyContent: 'space-between',
  },

  textContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default FinalScreen;
