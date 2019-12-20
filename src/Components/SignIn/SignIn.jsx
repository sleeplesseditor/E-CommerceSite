import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth } from '../../Firebase/Firebase.utils';
import { googleSignInStart } from '../../Redux/User/UserActions';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);