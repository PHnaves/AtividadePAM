import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Location from 'expo-location';
import colors from '../constants/colors';

export default function Home() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      let loc = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(loc.coords);
      setLocation(address[0]?.subregion || 'Local');
    })();
  }, []);

  const images = [
    require('../assets/img-frutas.png'),
    require('../assets/img-diversos.png'),
    require('../assets/img-acougue.png'),
  ];

  const titles = ['Frutas', 'Diversos', 'Açougue'];
  const colorsCards = [colors.card1, colors.card2, colors.card3];

  return (
    <View style={styles.container}>
      <Text style={styles.location}>📍 {location || 'Carregando...'}</Text>
      <Text style={styles.title}>Vamos pedir itens fresquinhos para você?</Text>

      <View style={styles.cards}>
        {titles.map((item, i) => (
          <TouchableOpacity key={i} style={[styles.card, { backgroundColor: colorsCards[i] }]}>
            <Image source={images[i]} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  location: { fontSize: 14, color: colors.subtitle },
  title: { fontSize: 18, marginTop: 10, color: colors.text },
  cards: { flexDirection: 'row', gap: 10, marginTop: 20 },
  card: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: colors.text,
  },
});
