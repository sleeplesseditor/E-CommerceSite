import { createSelector } from 'reselect';

const selectCollections = state => state.shop;

export const selectShopItems = createSelector(
    [selectCollections],
    shop => shop.collections
);