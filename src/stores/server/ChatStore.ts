import { faker } from '@faker-js/faker';
import md5 from 'md5';
import { observable, action, computed, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { Conversation } from '../../interfaces/Chat';
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
