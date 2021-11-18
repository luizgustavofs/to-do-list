import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View styles={styles.container}>
      <Text>To Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4F9',
    padding: 16,
  },
});
