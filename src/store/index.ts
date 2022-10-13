import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { REHYDRATE, PERSIST } from 'redux-persist/es/constants';

import signInSlice from 'pages/SignIn/reducer';
import shopSlice from 'pages/Goods/reducer';
import productDetailsSlice from 'pages/ProductDetails/reducer';
import cartSlice from 'pages/Cart/reducers/cartReducer';
import orderSlice from 'pages/Cart/reducers/orderReducer';

import { signInPersistConfig } from 'store/persistConfig';

const rootReducer = combineReducers({
    signIn: persistReducer(signInPersistConfig, signInSlice),
    shop: shopSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
    order: orderSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [REHYDRATE, PERSIST],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
