import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';
import { fetchCollectionsStartAsync } from '../../Redux/Shop/ShopActions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../Redux/Shop/ShopSelector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    render={props => (
                        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                    )} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={props => (
                        <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                    )} 
                />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
