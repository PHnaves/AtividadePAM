import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const dados = [
  { id: '1', nome: 'Maçã' },
  { id: '2', nome: 'Laranja' },
  { id: '3', nome: 'Tomate' }
];

export default function Pesquisa() {
  const [busca, setBusca] = useState('');

  const filtrados = dados.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar item..."
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.bg },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  text: { fontSize: 16, color: colors.text }
});
