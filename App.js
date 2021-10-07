import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const URL = 'https://gustavosouza.dev.br/'; //Coloque aqui a sua página

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <WebView source={{ uri: URL }} onLoad={console.log('Loaded!')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  page: {
    width: '100%',
    height: '100%',
  },
});
