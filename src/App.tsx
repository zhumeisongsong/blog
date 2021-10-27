import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'models/store';
import PostList from 'containers/PostList';
import './App.less';

const App: FC = () => (
  <Provider store={store}>
    <PostList />
  </Provider>
);

export default App;
