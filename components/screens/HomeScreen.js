import React from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { withNavigation } from 'react-navigation';
import useInject from '../stores/useInject';
import Header from '../layout/Header';
import FieldItem from '../layout/FieldItem';
import SendButton from '../layout/SendButton';

const Home = ({ navigation }) => {
  const { answerStore, current, questionStore } = useInject(store => ({
    answerStore: store.answerStore,
    current: store.current,
    questionStore: store.questionStore
  }));
  const { id, answer } = current;
  const getValue = () => {
    if (answer.check(questionStore.questions)) {
      if (id !== -1) {
        answerStore.replace(getSnapshot(answer), id);
        current.clearId();
        navigation.navigate('Results');
      } else {
        answerStore.add(getSnapshot(answer));
      }
      answer.createBoilerplate(questionStore.questions);
    } else {
      Alert.alert('Что-то не так!', 'Пожалуйста заполните поля корректно', [
        {
          text: 'OK'
        }
      ]);
    }
  };
  const onClear = () => {
    current.clearId();
    answer.createBoilerplate(questionStore.questions);
    navigation.navigate('Results');
  };
  return (
    <View style={styles.screenContainer}>
      <Header text={'Заполните данные'} />
      <FlatList
        data={questionStore.questions}
        keyExtractor={(item, index) => index.toString(10)}
        renderItem={({ item, index }) => (
          <FieldItem item={item} id={index} answer={answer} />
        )}
        ListFooterComponent={
          <View>
            <SendButton title='Отправить' onPress={getValue} />
            {id !== -1 && (
              <SendButton title='Отмена' color='#bebebe' onPress={onClear} />
            )}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1
  }
});

export default withNavigation(observer(Home));
