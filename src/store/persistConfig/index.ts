import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['signIn', 'shop'],
};

export const signInPersistConfig = {
    key: 'signIn',
    storage,
    whitelist: ['data', 'isAuth'],
};
