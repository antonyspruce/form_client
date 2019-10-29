import { types } from 'mobx-state-tree';
import AnswerItem from './AnswerItem';
import AnswerStore from './AnswerStore';
import QuestionStore from './QuestionStore';

export const Current = types
  .model('Current', {
    id: types.number,
    answer: AnswerItem
  })
  .actions(self => ({
    setId(id) {
      self.id = id;
    },
    clearId() {
      self.id = -1;
    },
    setAnswer(val) {
      self.answer = val;
    }
  }));

const RootStore = types.model('RootStore', {
  answerStore: AnswerStore,
  questionStore: QuestionStore,
  current: Current
});

export default RootStore;
