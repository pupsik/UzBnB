import { useMock } from './config';
import { ChatStoreType, PropertyStoreType } from './interfaces';
import localChatStore from './local/ChatStore';
import localPropertyStore from './local/PropertyStore';
import serverChatStore from './server/ChatStore';
import serverPropertyStore from './server/PropertyStore';

export type RootStore = {
    propertyStore: PropertyStoreType;
    chatStore: ChatStoreType;
};

const rootStore: RootStore = {
    propertyStore: useMock ? localPropertyStore : serverPropertyStore,
    chatStore: useMock ? localChatStore : serverChatStore
};

export default rootStore;
