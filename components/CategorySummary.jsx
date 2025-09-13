import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategorySummary({ category, total }) {
  return (
    <View style={styles.summary}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.total}>${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#DDEEFF',
    borderRadius: 8,
    marginBottom: 6,
  },
  category: { fontSize: 14, fontWeight: '600' },
  total: { fontSize: 14, fontWeight: '600', color: '#007bff' },
});
