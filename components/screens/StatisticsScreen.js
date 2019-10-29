import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';
import useInject from '../stores/useInject';
import Header from '../layout/Header';
import StatItem from '../layout/StatItem';

const StatisticsScreen = () => {
  const {answerStore, questionStore} = useInject(store => ({
    answerStore: store.answerStore,
    questionStore: store.questionStore,
  }));
  const stats = answerStore.stats(questionStore.questions);
  return (
    <View style={styles.screenContainer}>
      <Header text="Занимательная статистика" />
      <FlatList
        data={stats}
        keyExtractor={(item, index) => index.toString(10)}
        renderItem={({item, index}) => <StatItem item={item} id={index} />}
        ListFooterComponent={
          <Text
            style={
              styles.item
            }>{`Всего ответов: ${answerStore.answers.length}`}</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  item: {
    padding: 5,
    margin: 5,
    fontSize: 15,
  },
});

export default observer(StatisticsScreen);
