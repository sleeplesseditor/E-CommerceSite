import React from 'react';
import './AuthenticationPage.scss';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

const AuthenticationPage = () => (
    <div className='authentication'>
        <SignIn />
        <SignUp />
    </div>
);

export default AuthenticationPage;