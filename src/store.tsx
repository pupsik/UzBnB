// This is a common pattern of making the root store available to the entire app
// example 1: https://dev.to/ivandotv/mobx-root-store-pattern-with-react-hooks-318d
// example 2: https://github.com/7anshuai/react-mobx-typescript-realworld-example-app/blob/master/src/store.tsx

import React from 'react';
import rootStore, { RootStore } from './stores';
import { useLocalObservable } from 'mobx-react-lite';

// create context
const storeContext = React.createContext<RootStore | null>(null);

// create provider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const store = useLocalObservable(() => rootStore);
    return (
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
    );
};

// create hook
export const useStore = () => {
    const store = React.useContext(storeContext);
    if (!store) {
        throw new Error('useStore must be used within a storeProvider');
    }
    return store;
};
