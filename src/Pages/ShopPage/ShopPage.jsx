import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOveriew from '../../Components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOveriew} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
