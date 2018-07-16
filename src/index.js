import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';
import Mapb from './Mapb';

const App = () => (
  <Provider store={store}>
    <Mapb />
  </Provider>
);

export default App;
