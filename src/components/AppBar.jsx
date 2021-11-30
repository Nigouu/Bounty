import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 30
    // text: 'white'
    // ...
  },
  text: {
      color: 'white',
      fontSize: 20
  }
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
            <Pressable onPress={()=>Alert.alert('You clicked repositories, idiot')}>
                <Text style={styles.text} >Repositories</Text>
            </Pressable>
        </View>;
};

export default AppBar;