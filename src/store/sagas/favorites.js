import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import api from 'services/api';

import { addFavoriteSuccess } from 'store/actions/todos';

export function* addFavoriteRequest(action) {
  console.tron.log('Saga executado...');
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    if (response.status !== 404) {
      console.tron.log(response);
      yield put(addFavoriteSuccess(response.data.id));
    }
  } catch (error) {
    console.tron.log('Erro...');
    Alert.alert('Ops!', 'Algo deu errado.');
  }
}
