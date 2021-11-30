import React from 'react';
import { FlatList, View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    padding: 15,
    // paddingTop: 10,
    // paddingHorizontal: 10,
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

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
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
      // other props
    />
  );
  
};

export default RepositoryList;

