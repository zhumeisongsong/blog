import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'models/store';
import RouteConfig from 'routes/';
import './App.less';

const App: FC = () => (
  <Provider store={store}>
    <RouteConfig />
  </Provider>
);

export default App;
