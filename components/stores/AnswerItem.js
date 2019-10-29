import { types } from 'mobx-state-tree';
import {
  FIELD_TYPE_SOME,
  FIELD_TYPE_SOME_EXTENDED,
  FIELD_TYPE_UNIQUE_EXTENDED
} from '../util/Constants';

const Answer = types.model('Answer', {
  question: types.string,
  choices: types.array(types.string)
});

const AnswerItem = types
  .model('AnswerItem', {
    answer: types.array(Answer)
  })
  .actions(self => ({
    createBoilerplate(questions) {
      self.answer = questions.map(question => {
        return {
          question: question.text,
          choices: new Array(
            question.type === FIELD_TYPE_SOME_EXTENDED ||
            question.type === FIELD_TYPE_UNIQUE_EXTENDED
              ? question.data.length + 1
              : question.data.length
          ).fill('')
        };
      });
    },
    changeField(id, ind, val) {
      self.answer[id].choices[ind] = val;
    },
    set(val) {
      self = val;
    },
    check(questions) {
      if (self.clean().answer.some(el => el.choices.length === 0)) return false;
      if (
        self
          .clean()
          .answer.some(
            (el, ind) =>
              questions[ind].type !== FIELD_TYPE_SOME &&
              questions[ind].type !== FIELD_TYPE_SOME_EXTENDED &&
              el.choices.length > 1
          )
      )
        return false;
      return true;
    }
  }))
  .views(self => ({
    clean() {
      return {
        answer: self.answer.map(el => {
          return {
            question: el.question,
            choices: el.choices.filter(str => str !== '')
          };
        })
      };
    }
  }));

export default AnswerItem;
