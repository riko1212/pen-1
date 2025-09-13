import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SortMenu({ options, onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.option, selected === option && styles.selected]}
          onPress={() => handleSelect(option)}
        >
          <Text style={styles.text}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginVertical: 8 },
  option: {
    padding: 10,
    backgroundColor: '#EEE',
    borderRadius: 8,
    marginRight: 6,
  },
  selected: {
    backgroundColor: '#1C1C28',
  },
  text: {
    color: '#000',
  },
});
