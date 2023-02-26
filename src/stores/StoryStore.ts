import { observable, action, computed, makeObservable } from 'mobx';
import { faker } from '@faker-js/faker';
import api from '../service/api';

export type Story = {
    index: number;
    images: { path: string; label: string }[];
    highlights: { title: string; rating: string; price: string };
    body: string;
};

export type Stories = Array<Story>;

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export class StoryStore {
    stories: Stories = [];
    pageSize = 8;

    constructor() {
        makeObservable(this, {
            stories: observable,
            getStories: action,
            maxindex: computed,
        });
    }

    get maxindex() {
        if (this.stories.length === 0) return 0;
        return Math.max(...this.stories.map((o) => o.index));
    }

    getStories = () => {
        const maxIdx = this.maxindex;
        //api.get('listings');
        return Array.from(Array(this.pageSize)).forEach((_, idx) => {
            this.stories.push({
                index: idx + maxIdx + 1,
                images: Array.from(Array(getRandomArbitrary(1, 5)).keys()).map(
                    (_x, _i) => ({
                        path: `https://picsum.photos/id/${getRandomArbitrary(
                            10,
                            300
                        )}/300/200`,
                        label: 'Placeholder Label',
                    })
                ),
                highlights: {
                    title: `${faker.address.city()}, ${faker.address.state()}`,
                    rating: (getRandomArbitrary(100, 500) / 100).toString(),
                    price: `$${getRandomArbitrary(50, 500)} per night`,
                },
                body: `This is much longer content of the card. It can contain text, images, references, etc. This is the 
                            kind of text you see when you expand the card and a lot more information shows up. You will have a lot more details here 
                            about all sorts of things.`,
            });
        });
    };
}

export default new StoryStore();
