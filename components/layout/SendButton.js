import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SendButton = ({ title, color = '#00acee', onPress }) => {
  return (
    <View style={styles.btnContainer}>
      <Button title={title} color={color} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10
  }
});

export default SendButton;
