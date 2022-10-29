import { RootState } from 'types/ReduxTypes';

export const detailsReducerSelector = (state: RootState) =>
    state.productDetails;

export const detailsSelector = (state: RootState) => state.productDetails.data;
