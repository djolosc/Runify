import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      style={styles.map}
      originWhitelist={['*']}
      source={{
        uri: 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3',
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    justifyContent: 'center',
  },
});
