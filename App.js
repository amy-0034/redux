import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import TaskComponent from './TaskComponent';

const App = () => (
  <Provider store={store}>
    <TaskComponent />
  </Provider>
);

export default App;
