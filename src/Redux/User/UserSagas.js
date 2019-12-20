import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './UserTypes';
import { auth, googleProvider, createUserProfileDocument } from '../../Firebase/Firebase.utils';
import { googleSignInSuccess, googleSignInFailure } from './UserActions';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ 
            id: userSnapshot.id, 
            ...userSnapshot 
        }));
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
} 

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ])
}