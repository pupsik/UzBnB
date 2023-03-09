
import propertyStore, { PropertyStore } from './PropertyStore';

export type RootStore = {

    propertyStore: PropertyStore;
};

const rootStore: RootStore = {

    propertyStore,
};

export default rootStore;
