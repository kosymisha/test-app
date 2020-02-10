import { put, call, takeEvery } from 'redux-saga/effects';

import { fillTable } from '../actions';
import { fetchTableData } from '../api';
import { PICK_VALUE } from '../actions';

export function* workerPickData(action) {
    const response = yield call(fetchTableData, action.payload);
    yield put(fillTable(response.data, action.payload));
}

export default function* watcherPickData() {
    yield takeEvery(PICK_VALUE, workerPickData);
}
