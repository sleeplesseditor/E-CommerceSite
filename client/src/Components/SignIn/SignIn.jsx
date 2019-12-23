import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { googleSignInStart, emailSignInStart } from '../../Redux/User/UserActions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ 
        email: '', 
        password: '' 
    });

    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='Password'
                    required 
                />
                <div className='buttons'>
                    <Button type='submit'>
                        Sign In
                    </Button>
                    <Button 
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                        type='button'
                    >
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
        dispatch(emailSignInStart({ email, password })
    )
});

export default connect(null, mapDispatchToProps)(SignIn);