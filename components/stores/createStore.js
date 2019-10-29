import AnswerItem from './AnswerItem';
import AnswerStore from './AnswerStore';
import QuestionStore from './QuestionStore';
import RootStore, {Current} from './RootStore';
import data from '../util/data';

export default createStore = () => {
  const answerStore = AnswerStore.create({answers: []});
  const questionStore = QuestionStore.create({questions: data});
  let c = AnswerItem.create({answer: []});
  c.createBoilerplate(questionStore.questions);
  const current = Current.create({
    id: -1,
    answer: c,
  });
  const rootStore = RootStore.create({
    answerStore,
    questionStore,
    current,
  });
  return rootStore;
};
