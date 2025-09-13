import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ type, sum, date }) {
  return (
    <View style={styles.item}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.sum}>${sum}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    marginBottom: 8,
  },
  type: { fontSize: 14, fontWeight: '600' },
  sum: { fontSize: 14, color: 'green' },
  date: { fontSize: 12, color: '#555' },
});
