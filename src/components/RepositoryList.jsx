import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  item: {
    width: 300,
    flex: 1,
    marginHorizontal: 5,
    marginTop: 12,
    padding: 5,
    backgroundColor: 'white',
    fontSize: 16,
  },
  logoContainer:{
    padding: 10
  },
  logo:{
    width: 66,
    height: 58,
  },
  textBold: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 12,
    padding: 5,
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 30
  },
  textLanguage: {
    // flex: 1,
    alignSelf: 'flex-start',
    marginHorizontal: 5,
    marginTop: 12,
    padding: 5,
    backgroundColor: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  flexContainerLargeColumn: {
    flexDirection: 'column',
  },
  flexContainerLargeRow: {
    flexDirection: 'row',
  },
  flexContainerMediumColumn: {
    flexDirection: 'column',
    alignItems: 'center'

  },
  flexContainerMediumRow: {
    flexDirection: 'row',
    
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const fetchRepositories = async () => {
    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.100.16:4000/api/repositories');
    const json = await response.json();

    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.flexContainerLargeColumn}>
            <View style={styles.flexContainerLargeRow}>
              <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{uri:item.ownerAvatarUrl}}
                  />
                </View>
                <View style={styles.flexContainerLargeColumn}>
                  <Text style={styles.textBold}> {item.fullName} </Text>
                  <Text style={styles.item}> {item.description} </Text>
                  <Text style={styles.textLanguage}> {item.language} </Text>
                </View>
            </View>
            <View style={styles.flexContainerMediumRow}>
              <View style={styles.flexContainerMediumColumn}>
                <Text style={styles.textBold}> {item.stargazersCount}</Text>
                <Text>Stars</Text>
              </View>
              <View style={styles.flexContainerMediumColumn}>
                <Text style={styles.textBold}> {item.forksCount} </Text>
                <Text>Forks</Text>
              </View>
              <View style={styles.flexContainerMediumColumn}>
                <Text style={styles.textBold}> {item.reviewCount} </Text>
                <Text>Reviews</Text>
              </View>
              <View style={styles.flexContainerMediumColumn}>
                <Text style={styles.textBold}> {item.ratingAverage} </Text>
                <Text>Ratings</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
  
};

export default RepositoryList;

