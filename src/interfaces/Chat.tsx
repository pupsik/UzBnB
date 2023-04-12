// export interface ChatRecord {
//     sender: string;
//     receiver: string;
//     message: string;
//     time: string;
// }
import { User } from './User';

// export interface UserChat {
//     target_email: string;
//     chat_records: ChatRecord[];
// }

// export type UserChats = Array<UserChat>;

export interface Conversation {
    roomId: string;
    currentUser: User;
    otherUser: User;
    messages: Message[];
}

export interface Message {
    senderEmail: string;
    content: string;
    timestamp: string;
}
