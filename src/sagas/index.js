import { all } from 'redux-saga/effects';

import inputSearchSaga from './inputSearchSaga';
import keySearchSaga from './keySearchSaga';

export default function* rootSaga() {
    yield all([
        inputSearchSaga(),
        keySearchSaga()
    ]);
}
