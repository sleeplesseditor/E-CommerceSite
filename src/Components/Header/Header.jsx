import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../Firebase/Firebase.utils';
import './Header.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';
import { selectCurrentUser } from '../../Redux/User/UserSelectors';
import { ReactComponent as Logo } from '../../Assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link 
            className='logo-container'
            to="/"
        >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                SHOP
            </Link>
            <Link className='option' to='/'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
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

export default connect(mapStateToProps)(Header);