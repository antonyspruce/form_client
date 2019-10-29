import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import {
  FIELD_TYPE_TEXT,
  FIELD_TYPE_SOME,
  FIELD_TYPE_UNIQUE,
  FIELD_TYPE_SOME_EXTENDED,
  FIELD_TYPE_UNIQUE_EXTENDED
} from '../util/Constants';
import Toggler from './Toggler';

const FieldItem = ({ item, id, answer }) => {
  const { text, type, data } = item;
  let dataField;
  if (type === FIELD_TYPE_TEXT) {
    dataField = (
      <TextInput
        style={styles.input}
        placeholder={data[0]}
        value={answer.answer[id].choices[0]}
        onChangeText={text => answer.changeField(id, 0, text)}
      />
    );
  } else if (type === FIELD_TYPE_UNIQUE || type === FIELD_TYPE_SOME) {
    dataField = data.map((str, ind) => (
      <Toggler key={ind} str={str} id={id} ind={ind} answer={answer} />
    ));
  } else if (
    type === FIELD_TYPE_UNIQUE_EXTENDED ||
    type === FIELD_TYPE_SOME_EXTENDED
  ) {
    dataField = data.map((str, ind) => (
      <Toggler key={ind} str={str} id={id} ind={ind} answer={answer} />
    ));
    dataField.push(
      <TextInput
        key={data.length}
        style={styles.input}
        placeholder='Введите свой вариант'
        value={answer.answer[id].choices[answer.answer[id].choices.length - 1]}
        onChangeText={text =>
          answer.changeField(id, answer.answer[id].choices.length - 1, text)
        }
      />
    );
  }
  return (
    <View style={styles.fieldItem}>
      <Text style={styles.basicText}>{`${id + 1}. ${text}`}</Text>
      <View style={styles.optionsConainer}>{dataField}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  },
  fieldItem: {
    padding: 5,
    margin: 5
  },
  optionsConainer: {
    paddingHorizontal: 15
  },
  basicText: {
    fontSize: 15
  }
});

export default observer(FieldItem);
