import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';
import Main from 'pages/main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
