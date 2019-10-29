import React from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Toggler = ({ str, id, ind, answer }) => {
  return (
    <View style={styles.optionItem}>
      <Text>{str}</Text>
      <Switch
        value={answer.answer[id].choices[ind] === '' ? false : true}
        onValueChange={value => {
          value === true
            ? answer.changeField(id, ind, str)
            : answer.changeField(id, ind, '');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default observer(Toggler);
