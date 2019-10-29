import {
  FIELD_TYPE_TEXT,
  FIELD_TYPE_SOME,
  FIELD_TYPE_UNIQUE,
  FIELD_TYPE_SOME_EXTENDED,
  FIELD_TYPE_UNIQUE_EXTENDED
} from './Constants';

export default fieldsArray = [
  {
    text: 'Имя',
    type: FIELD_TYPE_TEXT,
    data: ['Brad']
  },
  {
    text: 'Возраст',
    type: FIELD_TYPE_TEXT,
    data: ['21']
  },
  {
    text: 'Гендер',
    type: FIELD_TYPE_UNIQUE,
    data: ['Мужской', 'Женский', 'Небинарный']
  },
  {
    text: 'Красное или белое?',
    type: FIELD_TYPE_SOME,
    data: ['Красное', 'Белое']
  },
  {
    text: 'Деятельность',
    type: FIELD_TYPE_UNIQUE_EXTENDED,
    data: ['IT', 'Экономика', 'Здоровье', 'Производство']
  },
  {
    text: 'Увлечения',
    type: FIELD_TYPE_SOME_EXTENDED,
    data: ['Спорт', 'Искусство', 'Кулинария', 'Технологии']
  },
  {
    text: 'Выберите один из четырёх',
    type: FIELD_TYPE_UNIQUE,
    data: ['A', 'B', 'C', 'D']
  },
  {
    text: 'Выберите несколько из четырёх',
    type: FIELD_TYPE_SOME_EXTENDED,
    data: ['A', 'B', 'X', 'Y']
  }
];
