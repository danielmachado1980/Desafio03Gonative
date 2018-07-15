import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';
import Map1 from 'Map1';

const App = () => (
  <Provider store={store}>
    <Map1 />
  </Provider>
);

export default App;
