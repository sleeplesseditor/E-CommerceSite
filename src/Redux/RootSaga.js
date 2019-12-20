import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './Shop/ShopSagas';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}