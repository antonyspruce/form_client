import { types } from 'mobx-state-tree';

const QuestionItem = types.model('QuestionItem', {
  text: types.string,
  type: types.string,
  data: types.array(types.string)
});

const QuestionStore = types.model('QuestionStore', {
  questions: types.array(QuestionItem)
});

export default QuestionStore;
