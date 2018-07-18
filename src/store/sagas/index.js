import { all, takeLatest } from 'redux-saga/effects';

import { Types as MarkerTypes } from 'store/ducks/markings';
import { addMarkingRequest } from './markings';

export default function* rootSaga() {
  return yield all([
    takeLatest(MarkerTypes.ADD_REQUEST, addMarkingRequest),
  ]);
}
