import React from 'react';
import {View, FlatList, StyleSheet, AsyncStorage} from 'react-native';
import {observer} from 'mobx-react-lite';
import {getSnapshot} from 'mobx-state-tree';
import {withNavigation} from 'react-navigation';
import useInject from '../stores/useInject';
import Header from '../layout/Header';
import ResultItem from '../layout/ResultItem';
import SendButton from '../layout/SendButton';

const Results = ({navigation}) => {
  const {answerStore, current} = useInject(store => ({
    answerStore: store.answerStore,
    current: store.current,
  }));
  const onClear = () => {
    answerStore.clear();
  };
  const onDelete = id => {
    answerStore.delete(id);
  };
  const onEdit = ind => {
    current.setId(ind);
    current.setAnswer(getSnapshot(answerStore.answers[ind]));
    navigation.navigate('Home');
  };
  return (
    <View style={styles.screenContainer}>
      <Header text={'Результаты'} />
      <FlatList
        data={answerStore.answers}
        keyExtractor={(item, index) => index.toString(10)}
        renderItem={({item, index}) => (
          <ResultItem
            item={item}
            id={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
        ListFooterComponent={
          answerStore.answers.length > 0 && (
            <View>
              <SendButton title="Очистить" onPress={onClear} />
              <SendButton title="Прочитать" onPress={} />
            </View>
          )
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
});

export default withNavigation(observer(Results));
