import { RootState } from 'types/ReduxTypes';

export const userInfoSelector = (state: RootState) => state.signIn.userData;
