import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleware = [];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

console.tron.log('Testando Reactotron...');

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

export default store;
