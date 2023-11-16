import { AppStore } from '../_libs/types';

export const SET_ACTIVE_NAV = 'SET_ACTIVE_NAV';

export const appReducer = (
  state: AppStore,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_ACTIVE_NAV:
      return { ...state, activeNav: action.payload };

    default:
      return state;
  }
};
