import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './Shop/ShopSagas';
import { userSagas } from './User/UserSagas';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}