import React from 'react';
import './CollectionPage.scss';
import { connect } from 'react-redux';
import CollectionItem from '../../Components/CollectionItem/CollectionItem';
import { selectCollection } from '../../Redux/Shop/ShopSelector';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>Collection Page</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);