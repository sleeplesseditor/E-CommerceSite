import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { addItem } from '../../Redux/Cart/CartActions';
import './CollectionItem.scss';

const CollectionItem = ({id, name, price, imageUrl, addItem}) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button inverted>
            ADD TO CART
        </Button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);