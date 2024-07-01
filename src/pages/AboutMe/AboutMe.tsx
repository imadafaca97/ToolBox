import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/profile_picture.jpg')} // Reemplaza con la ruta de tu logo
        style={styles.logo}
      />
      <Text style={styles.title}>Sebastian Santos</Text>
      <Text style={styles.title}>Sebastian96Santos@gmail.com</Text>
      <Text style={styles.title}>829-633-5160</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/cbasantos/')}>https://www.linkedin.com/in/cbasantos/</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: 'blue',
    marginTop: 5,
  },
});

export default AboutMe;
