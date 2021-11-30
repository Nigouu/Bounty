import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 24, fontWeight: '700' }}>Rate Repository Application</Text>
      <RepositoryList/>
    </View>
  );
};

export default Main;