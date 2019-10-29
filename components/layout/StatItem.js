import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatItem = ({ item, id }) => {
  const obj = item.choices.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  let out = '';
  for (let prop in obj) {
    out += `${prop} - ${obj[prop]}\n`;
  }
  return (
    <View style={styles.item}>
      <Text style={styles.basicText}>{`${id + 1}. ${item.question}`}</Text>
      <Text style={styles.basicText}>{out}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5
  },
  basicText: {
    fontSize: 15
  }
});

export default StatItem;
