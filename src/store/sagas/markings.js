import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as MarkerActions } from 'store/ducks/markings';

export function* addMarkingRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.marker.user}`);

    const markers = yield select(state => state.markers.mapMarkers);

    if (markers.find(Marker => Marker.id === response.data.id)) {
      yield put(MarkerActions.addMarkerError('Usuário duplicado'));
    } else {
      yield put(MarkerActions.addMarkerSuccess({
        id: response.data.id,
        avatar: response.data.avatar_url,
        user: response.data.login,
        description: response.data.bio,
        coordinate: action.payload.marker.regionClicked,
      }));
    }
  } catch (err) {
    yield put(MarkerActions.addMarkerError('Usuário não encontrado'));
  }
}
