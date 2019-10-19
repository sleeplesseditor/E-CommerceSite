import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../Redux/Shop/ShopSelector';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
