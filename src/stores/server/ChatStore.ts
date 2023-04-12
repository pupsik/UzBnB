import { faker } from '@faker-js/faker';
import md5 from 'md5';
import { observable, action, computed, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { Conversation } from '../../interfaces/Chat';
// import { ChatRecord, UserChat } from '../../interfaces/Chat';
import { Auth0User, User } from '../../interfaces/User';
import { getRandomArbitrary, getRandomItem } from '../../utilities';
import { ChatStoreType } from '../interfaces';

const Neal = {
    user_id: uuidv4(),
    first_name: 'Neal',
    last_name: 'Harrington',
    email: 'nealgharrington@gmail.com',
    username: `Neal Harrington`,
    avatar: `https://avatars.githubusercontent.com/u/5447989?v=4`,
};

const Rita = {
    user_id: uuidv4(),
    first_name: 'Rita',
    last_name: 'Linets',
    email: 'rita.linets@gmail.com',
    username: `Rita Linets`,
    avatar: `https://lh3.googleusercontent.com/a/AGNmyxamGduKErNgEoy-sUYsmCt6YIe6Rw-wDyMi03S67w=s96-c`,
};

export class ChatStore implements ChatStoreType {
    userConversations: Conversation[] = [];

    constructor() {
        makeObservable(this, {
            userConversations: observable,
            setUserConversations: action,
        });
    }

    setUserConversations = (conversations: Conversation[]) =>
        (this.userConversations = conversations);

    // findOrCreateConversation = (roomid) => {
    //     let conversation = this.conversations.find((x) => x.roomid === roomid);

    //     // If conversation is undefined, create a new conversation and add it to the array
    //     if (!conversation) {
    //       const conversation: Conversation = {
    //         roomid: roomid,
    //         participants: [],
    //         messages: [],
    //       };
    //       this.conversations.push(conversation);
    //     }

    //     return conversation;
    //   };

    // getConversation = (roomid: string): Promise<void> => {
    //     const conversation = this.userConverstaions.find((x) => x.roomid == roomid);

    //     Array.from(Array(getRandomArbitrary(0, 3))).forEach((_x, _i) => {
    //         conversation?.messages.push({
    //             source_email: (_i + 1) % 2 === 0 ? source_email : target_email,
    //             target_email: (_i + 1) % 2 === 0 ? target_email : source_email,
    //             message: faker.lorem.lines(getRandomArbitrary(1, 3)),
    //             time: `${getRandomArbitrary(0, 24)}:${getRandomArbitrary(
    //                 0,
    //                 59
    //             )}`,
    //         });
    //     });
    // };

    // getUserChat = (
    //     roomid: string
    // ): Promise<void> => {
    //     const chat = this.conversations.find((x) => x.target_email === target_email);
    //     const exchage: ChatRecord[] = [];
    //     Array.from(Array(getRandomArbitrary(1, 3))).forEach((_x, _i) => {
    //         exchage.push({
    //             source_email: (_i + 1) % 2 === 0 ? source_email : target_email,
    //             target_email: (_i + 1) % 2 === 0 ? target_email : source_email,
    //             message: faker.lorem.lines(getRandomArbitrary(1, 3)),
    //             time: `${getRandomArbitrary(0, 24)}:${getRandomArbitrary(
    //                 0,
    //                 59
    //             )}`,
    //         });
    //     });

    //     if (chat) {
    //         chat.chat_records = exchage;
    //     } else {
    //         this.chats.push({
    //             target_email: target_email,
    //             chat_records: exchage,
    //         });
    //     }

    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, 500);
    //     });
    // };

    getRandomUser = (): User => {
        const fname = faker.name.firstName();
        const lname = faker.name.lastName();

        return {
            user_id: uuidv4(),
            first_name: fname,
            last_name: lname,
            email: faker.internet.email(),
            username: `${fname} ${lname}`,
            avatar: `https://xsgames.co/randomusers/assets/avatars/${getRandomItem(
                ['male', 'female']
            )}/${getRandomArbitrary(1, 100)}.jpg`,
        };
    };

    getUserConversations = (user: Auth0User): Promise<void> => {
        const Me: User = {
            user_id: uuidv4(),
            first_name: user.given_name || '',
            last_name: user.given_name || '',
            email: user.email,
            username: user.name,
            avatar: user.picture,
        };
        const converstaions: Conversation[] = [];
        return new Promise((resolve) => {
            setTimeout(() => {
                Array.from(Array(5)).forEach((_, _i) => {
                    const RandomUser = this.getRandomUser();
                    const participants: User[] = [Me, RandomUser];
                    converstaions.push({
                        roomId: md5(
                            participants
                                .sort((a, b) => a.email.localeCompare(b.email))
                                .map((participant) =>
                                    participant.email.toLowerCase()
                                )
                                .join(',')
                        ),
                        currentUser: Me, // quickest look-up
                        otherUser: RandomUser,
                        messages: [],
                    });
                });
                this.setUserConversations(converstaions);
                resolve();
            }, 500);
        });
    };
}

export default new ChatStore();
