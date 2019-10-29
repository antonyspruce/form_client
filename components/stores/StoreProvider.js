import { createContext, useContext } from 'react';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
