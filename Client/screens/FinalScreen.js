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
            latitude: 44.81827387956986,
            longitude: 20.440823787877783,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          style={{ width: 300, height: 300 }}
          provider={MapView.PROVIDER_GOOGLE}
        >
          <Polyline
            coordinates={[
              { latitude: 44.81514486569136, longitude: 20.439300516951377 },
              { latitude: 44.8154496900962, longitude: 20.439908029269787 },
              { latitude: 44.81572998697745, longitude: 20.44040194172378 },
              { latitude: 44.81584560905505, longitude: 20.43971046428758 },
              { latitude: 44.815891157078255, longitude: 20.43962156004586 },
              { latitude: 44.8163816719711, longitude: 20.439478325434205 },
              { latitude: 44.816938751681974, longitude: 20.439285699577148 },
              { latitude: 44.81714196180918, longitude: 20.43915728233911 },
              { latitude: 44.81782136816983, longitude: 20.438976066867756 },
              { latitude: 44.818007057368526, longitude: 20.438951371245057 },
              { latitude: 44.81820676017897, longitude: 20.43900076249045 },
              { latitude: 44.818224277946086, longitude: 20.439005701614906 },
              { latitude: 44.81860966726224, longitude: 20.43919338834742 },
              { latitude: 44.81876732579443, longitude: 20.43925759696549 },
              { latitude: 44.81915971848111, longitude: 20.439287231712726 },
              { latitude: 44.819468025138264, longitude: 20.43932674470905 },
              { latitude: 44.819898951011304, longitude: 20.43949961406654 },
              { latitude: 44.82001106127635, longitude: 20.439549005311942 },
              { latitude: 44.82060313999792, longitude: 20.439860170157953 },
              { latitude: 44.82071875229319, longitude: 20.44001328301869 },
              { latitude: 44.82072575909154, longitude: 20.440433108604584 },
              { latitude: 44.81987096478447, longitude: 20.441137215779957 },
              { latitude: 44.81963731989877, longitude: 20.441511521672094 },
              { latitude: 44.81964085997882, longitude: 20.441516512412537 },
              { latitude: 44.81881163220096, longitude: 20.44238502532586 },
              { latitude: 44.81874082951992, longitude: 20.442409979052258 },
              { latitude: 44.818716048561015, longitude: 20.442489830976744 },
              { latitude: 44.81861692461888, longitude: 20.442564692155944 },
              { latitude: 44.81850009975406, longitude: 20.442769312712425 },
              { latitude: 44.81794756365081, longitude: 20.443098913017803 },
              { latitude: 44.81750857904352, longitude: 20.443563052326034 },
              { latitude: 44.81750503882169, longitude: 20.443553070833357 },
              { latitude: 44.8170271082077, longitude: 20.443742719153995 },
              { latitude: 44.81691382037028, longitude: 20.443812589587917 },
              { latitude: 44.81672264663992, longitude: 20.443987265672718 },
              { latitude: 44.81604677369898, longitude: 20.44441662745661 },
              { latitude: 44.8160644752044, longitude: 20.44425692360765 },
              { latitude: 44.81576354887311, longitude: 20.44364805268348 },
              { latitude: 44.815512185675004, longitude: 20.44290443163675 },
              { latitude: 44.81558546519122, longitude: 20.441476796801094 },
              { latitude: 44.81574778628473, longitude: 20.440397935086423 },
              { latitude: 44.815142388389376, longitude: 20.439304961870093 },
              { latitude: 44.81514486569136, longitude: 20.439300516951377 },
            ]}
            strokeWidth={3}
            strokeColor={'#0000FF'}
            geodesic={true}
          />
          <Marker
            coordinate={{
              latitude: 44.81514486569136,
              longitude: 20.439300516951377,
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
