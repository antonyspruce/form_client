import {types} from 'mobx-state-tree';
import AnswerItem from './AnswerItem';

const AnswerStore = types
  .model('AnswerStore', {
    answers: types.array(AnswerItem),
  })
  .actions(self => ({
    add(item) {
      self.answers.push(item);
    },
    replace(item, id) {
      self.answers[id] = item;
    },
    clear() {
      self.answers = [];
    },
    delete(id) {
      self.answers.splice(id, 1);
    },
  }))
  .views(self => ({
    stats(questions) {
      let res = [];
      questions.forEach((el, ind) => {
        res[ind] = {
          question: el.text,
          choices: [],
        };
      });
      self.answers.forEach(el => {
        el.clean().answer.forEach((el, ind) => {
          if (res[ind].question === el.question) {
            res[ind].choices = [...res[ind].choices, ...el.choices];
          }
        });
      });
      return res;
    },
  }));

export default AnswerStore;
