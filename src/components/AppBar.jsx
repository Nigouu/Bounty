import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 30
  },
  text: {
      color: 'white',
      fontSize: 20,
      paddingRight: 30
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="SignIn">
          <Text style={styles.text}>Sign In</Text>
        </Link>
        </ScrollView>
    </View>
  )
};

export default AppBar;