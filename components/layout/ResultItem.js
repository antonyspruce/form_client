import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ResultItem = ({item, id, onEdit, onDelete}) => {
  return (
    <View style={styles.fieldItem}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{`${id + 1}.`}</Text>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconItem} onPress={() => onEdit(id)}>
            <Icon name="md-create" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconItem}
            onPress={() => onDelete(id)}>
            <Icon name="md-close" color="red" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.optionsConainer}>
        {item.clean().answer.map((el, i) => (
          <Text style={styles.basicText} key={i}>{`${
            el.question
          }: ${el.choices.join(', ')}`}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    marginHorizontal: 5,
  },
  fieldItem: {
    padding: 5,
    margin: 5,
  },
  optionsConainer: {
    paddingHorizontal: 15,
  },
  basicText: {
    fontSize: 15,
  },
  headingText: {
    fontSize: 20,
  },
});

export default ResultItem;
