import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as MarkerActions } from 'store/ducks/markings';

export function* addMarkingRequest(action) {
  try {
    console.tron.log('Testando addmarking...');
    const response = yield call(api.get, `/users/${action.payload.marking.user}`);
    console.tron.log('Passou aqui');
    const markers = yield select(state => state.markings.mapMarkings);

    if (markers.find(Marker => Marker.id === response.data.id)) {
      yield put(MarkerActions.addMarkingError('Usuário duplicado'));
    } else {
      yield put(MarkerActions.addMarkingSuccess({
        id: response.data.id,
        avatar: response.data.avatar_url,
        user: response.data.login,
        description: response.data.bio,
        coordinate: action.payload.marking.regionClicked,
      }));
    }
  } catch (err) {
    yield put(MarkerActions.addMarkingError('Usuário não encontrado'));
  }
}
