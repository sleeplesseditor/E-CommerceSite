import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './Header.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';
import { selectCurrentUser } from '../../Redux/User/UserSelectors';
import { signOutStart } from '../../Redux/User/UserActions';
import { ReactComponent as Logo } from '../../Assets/crown.svg';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className='header'>
        <Link 
            className='logo-container'
            to="/"
        >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={signOutStart}>SIGN OUT</div> 
                ):( 
                <Link className='option' to='/signin'>SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);