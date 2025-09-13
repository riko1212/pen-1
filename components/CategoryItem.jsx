import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryItem({ title, onAdd }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2E2E3E',
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  plus: {
    color: '#fff',
    fontSize: 16,
  },
});
