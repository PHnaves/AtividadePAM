import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../constants/colors';

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      <Image
        source={require('../assets/img-acougue.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Açougue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    color: colors.text,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: colors.subtitle,
  },
});
