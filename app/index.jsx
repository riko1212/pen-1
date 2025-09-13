import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Sidebar from '../components/Sidebar';
import TransactionForm from '../components/TransactionForm';
import TransactionItem from '../components/TransactionItem';
import CategorySummary from '../components/CategorySummary';
import SortMenu from '../components/SortMenu';

export default function App() {
  const [categories, setCategories] = useState([
    'Food',
    'Transport',
    'Shopping',
  ]);
  const [transactions, setTransactions] = useState([]);
  const [sortOption, setSortOption] = useState('Date');

  const handleAddCategory = (newCategory) =>
    setCategories([...categories, newCategory]);
  const handleSaveTransaction = (transaction) =>
    setTransactions([...transactions, transaction]);
  const handleSort = (option) => setSortOption(option);

  return (
    <View style={styles.container}>
      <Sidebar
        username="Alex"
        categories={categories}
        onAddCategory={handleAddCategory}
      />
      <View style={{ flex: 3, marginLeft: 16 }}>
        <SortMenu options={['Date', 'Sum', 'Type']} onSelect={handleSort} />
        <TransactionForm onSave={handleSaveTransaction} />
        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionItem {...item} />}
          keyExtractor={(item, idx) => idx.toString()}
        />
        {categories.map((cat, idx) => (
          <CategorySummary
            key={idx}
            category={cat}
            total={Math.floor(Math.random() * 500)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
});
