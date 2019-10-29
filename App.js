import React from 'react';
import createStore from './components/stores/createStore';
import { StoreProvider } from './components/stores/StoreProvider';
import { createAppContainer } from 'react-navigation';
import Navigator from './components/util/Navigator';

const AppContainer = createAppContainer(Navigator);

const rootStore = createStore();

const App = () => (
  <StoreProvider value={rootStore}>
    <AppContainer />
  </StoreProvider>
);

export default App;