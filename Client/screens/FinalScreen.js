import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';

import CustomButton from '../components/CustomButton';

const FinalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text={'Home'}
        handlePress={() => navigation.navigate('FirstQuestion')}
      />
      <WebView
        source={{
          html:
            '<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="650" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        }}
        style={{ marginTop: 40 }}
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
