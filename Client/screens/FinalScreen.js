import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView, { Polyline, Marker } from 'react-native-maps';

import CustomButton from '../components/CustomButton';

const FinalScreen = ({ navigation, routeName }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text={'Home'}
        handlePress={() => navigation.navigate('FirstQuestion')}
      />
      <Text style={styles.headerText}>{routeName}</Text>
      <View>
        <MapView
          initialRegion={{
            latitude: 44.80456679556077,
            longitude: 20.432008598585142,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,
          }}
          style={{ width: 300, height: 300 }}
          provider={MapView.PROVIDER_GOOGLE}
        >
          <Polyline
            coordinates={[
              { latitude: 44.78875773961665, longitude: 20.416642355124797 },
              { latitude: 44.788421826560615, longitude: 20.417848652527287 },
              { latitude: 44.78882885140137, longitude: 20.41952453726285 },
              { latitude: 44.79050622726397, longitude: 20.42310810933113 },
              { latitude: 44.79333456245305, longitude: 20.427566859722507 },
              { latitude: 44.797110787393926, longitude: 20.43415808581139 },
              { latitude: 44.800210696958125, longitude: 20.4399835502073 },
              { latitude: 44.80166049430508, longitude: 20.4422658711096 },
              { latitude: 44.80304482156024, longitude: 20.44399792867607 },
              { latitude: 44.804089946006165, longitude: 20.445060301632623 },
              { latitude: 44.805817989130304, longitude: 20.44659007662769 },
              { latitude: 44.80819308477778, longitude: 20.448499567276432 },
              { latitude: 44.80845780222557, longitude: 20.448675283193044 },
              { latitude: 44.8097967264408, longitude: 20.449212613405006 },
              { latitude: 44.8103902107358, longitude: 20.449402341504626 },
              { latitude: 44.8118506524524, longitude: 20.449588862130767 },
              { latitude: 44.81338728357341, longitude: 20.449887746011967 },
              { latitude: 44.81397124211035, longitude: 20.449929111315566 },
              { latitude: 44.81481048871818, longitude: 20.44982569805392 },
              { latitude: 44.815139141417184, longitude: 20.44978846928004 },
              { latitude: 44.81525358253764, longitude: 20.44961887153198 },
              { latitude: 44.81583458781742, longitude: 20.44957336969711 },
              { latitude: 44.816826391367, longitude: 20.449345860523604 },
              { latitude: 44.81871605270367, longitude: 20.448663333005605 },
              { latitude: 44.82047513691558, longitude: 20.44760649875285 },
              { latitude: 44.82151593144574, longitude: 20.446806639271355 },
              { latitude: 44.82213478361549, longitude: 20.446265332069856 },
            ]}
            strokeWidth={3}
            strokeColor={'#0000FF'}
            geodesic={true}
          />
          <Marker
            coordinate={{
              latitude: 44.78875773961665,
              longitude: 20.416642355124797,
            }}
          />
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
