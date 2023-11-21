import { AppStore } from '../_libs/types';

export const SET_ACTIVE_NAV = 'SET_ACTIVE_NAV';
export const SET_DESIGNS = 'SET_DESIGNS';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_REVIEWS = 'SET_REVIEWS';

export const appReducer = (
  state: AppStore,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_ACTIVE_NAV:
      return { ...state, activeNav: action.payload };
    case SET_DESIGNS: {
      return { ...state, designs: action.payload };
    }
    case SET_REVIEWS: {
      return { ...state, reviews: action.payload };
    }
    case SET_VIDEOS: {
      return { ...state, videos: action.payload };
    }
    default:
      return state;
  }
};
