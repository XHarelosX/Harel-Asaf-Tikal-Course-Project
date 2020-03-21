import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import MainStore, { TStore } from './Store';

const storeContext = React.createContext<TStore | null>(null);

const StoreProvider: React.FC = ({ children }) => {

  const store = useLocalStore(MainStore)

  return (
    <storeContext.Provider value={store}> {children} </storeContext.Provider>
  )
}

export function useStore() {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
}


export default StoreProvider;
