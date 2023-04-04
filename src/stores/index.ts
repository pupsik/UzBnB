import { useMock } from './config';
import { PropertyStoreType } from './interfaces';
import localPropertyStore from './local/PropertyStore';
import serverPropertyStore from './server/PropertyStore';

// async function loadStore(localStorePath, serverStorePath) {
//     if (useMock) {
//         const module = await import(localStorePath);
//         return module.default;
//     } else {
//         const module = await import(serverStorePath);
//         return module.default;
//     }
// }

// async function getStore(localStorePath, serverStorePath) {
//     return await loadStore(localStorePath, serverStorePath);
// }

// const PropertyStore = await getStore(
//     './local/PropertyStore',
//     './server/PropertyStore'
// );

export type RootStore = {
    propertyStore: PropertyStoreType;
};

const rootStore: RootStore = {
    propertyStore: useMock ? localPropertyStore : serverPropertyStore,
};

export default rootStore;
