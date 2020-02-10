import { put, call, takeEvery } from 'redux-saga/effects';

import { KEY_PRESS, loadHints } from '../actions';
import { fetchHints } from '../api';

export function* workerKeyPress(action) {
    const response = yield call(fetchHints, action.payload);
    yield put(loadHints(response.data));
}

export default function* watcherKeyPress() {
    yield takeEvery(KEY_PRESS, workerKeyPress);
}
