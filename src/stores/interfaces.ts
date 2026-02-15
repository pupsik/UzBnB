import { Conversation, Message } from '../interfaces/Chat';
import {
    PropertyDetails,
    PropertyImages,
    PropertyReviews,
    PropertySummaries,
} from '../interfaces/Property';
import { Auth0User } from '../interfaces/User';

export interface PropertyStoreType {
    properties: PropertySummaries;
    pageSize: number;
    maxindex: number;
    getPropertyImages: (id: number) => PropertyImages;
    getPropertyReviews: (id: number) => PropertyReviews;
    getPropertyDetails: (id: number) => PropertyDetails;
    getProperties: (_accessToken: string | null) => Promise<void>;
}

export interface ChatStoreType {
    userConversations: Conversation[];
    getUserConversations: (user: Auth0User) => Promise<void>;
    addUserMessageToRoom: (roomid: string, message: Message) => void;
}
