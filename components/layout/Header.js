import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00acee',
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 5
  },
  headerText: {
    fontSize: 20,
    padding: 10,
    color: '#edf4ed',
    textAlign: 'center'
  }
});

export default Header;
