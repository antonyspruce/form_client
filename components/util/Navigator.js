import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';
import ResultsScreen from '../screens/ResultsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Анкета',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-list" color={tintColor} size={24} />
        ),
      },
    },
    Results: {
      screen: ResultsScreen,
      navigationOptions: {
        title: 'Ответы',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-list-box" color={tintColor} size={24} />
        ),
      },
    },
    Statistics: {
      screen: StatisticsScreen,
      navigationOptions: {
        title: 'Статистика',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-stats" color={tintColor} size={24} />
        ),
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        title: 'Вопросы',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-menu" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeTintColor: '#f5f5f5',
    inactiveTintColor: '#777',
    barStyle: {backgroundColor: '#00acee'},
  },
);
