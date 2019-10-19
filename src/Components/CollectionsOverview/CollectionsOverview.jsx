import React from 'react';
import './CollectionsOverview.scss';
import { connect } from 'react-redux';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import { selectShopItems } from '../../Redux/Shop/ShopSelector';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps)(CollectionsOverview);