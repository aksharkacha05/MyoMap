// src/components/BodyMap.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BodyMap = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/body-front.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={[styles.zone, { top: '50%', left: '40%' }]}
        onPress={() => onSelect('Knee')}
      />
      <TouchableOpacity
        style={[styles.zone, { top: '30%', left: '60%' }]}
        onPress={() => onSelect('Shoulder')}
      />
      {/* Additional zones here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  zone: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
  },
});

export default BodyMap;
