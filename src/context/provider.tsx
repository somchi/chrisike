import { createContext, useReducer } from 'react';
import { AppStore } from '../_libs/types';
import { appReducer } from './reducer';

const INITIAL_STATE: AppStore = {
  activeNav: 'home',
};

export const AppContext = createContext<{
  state: AppStore;
  dispatch: React.Dispatch<any>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export const AppProvider = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  return (
    <AppContext.Provider value={{ state, dispatch }}></AppContext.Provider>
  );
};
