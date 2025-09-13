import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

export default function Sidebar({ username, categories, onAddCategory }) {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.logo}>PennyWise</Text>
      <Text style={styles.welcome}>Welcome, {username}!</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem title={item} onAdd={() => onAddCategory(item)} />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#1C1C28',
    flex: 1,
    padding: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  welcome: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 16,
  },
});
