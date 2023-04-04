import { faker } from '@faker-js/faker';
import { observable, action, computed, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import {
    houseTypes,
    houseAdjective,
    houseLocation,
} from '../../constants/fake_picklists';
import {
    PropertySummaries,
    PropertyImages,
    PropertyDetails,
    PropertyReviews,
} from '../../interfaces/Property';
import { getRandomArbitrary, capitalizeFirstLetter } from '../../utilities';
import { PropertyStoreType } from '../interfaces';

export class PropertyStore implements PropertyStoreType {
    properties: PropertySummaries = [];
    pageSize = 8;

    constructor() {
        makeObservable(this, {
            properties: observable,
            getProperties: action,
            maxindex: computed,
        });
    }

    get maxindex() {
        if (this.properties.length === 0) return 0;
        return Math.max(...this.properties.map((o) => o.index));
    }

    getPropertyImages = (id: number): PropertyImages => {
        return Array.from(Array(5).keys()).map((_x, _i) => ({
            id: id,
            path: `https://picsum.photos/id/${getRandomArbitrary(
                10,
                300
            )}/300/200`,
            label: 'Placeholder Label',
        }));
    };

    getPropertyReviews = (id: number): PropertyReviews => {
        return {
            id: id,
            reviews: Array.from(Array(getRandomArbitrary(1, 50))).map(
                (_x, idx) => ({
                    review_id: idx,
                    review_by: {
                        user_id: getRandomArbitrary(1, 1000),
                        first_name: faker.name.firstName(),
                        last_name: faker.name.lastName(),
                    },
                    review_text: `${faker.lorem.paragraph(
                        getRandomArbitrary(4, 7)
                    )}`,
                })
            ),
        };
    };

    getPropertyDetails = (id: number): PropertyDetails => {
        const start = capitalizeFirstLetter(
            `${faker.helpers.arrayElement(houseAdjective)}`
        );

        const title = `${start} ${faker.helpers.arrayElement(houseTypes)} 
                        ${faker.helpers.arrayElement(houseLocation)} `;

        return {
            id: id,
            title: title,
            review_count: getRandomArbitrary(5, 500),
            short_address: `${faker.address.city()}, ${faker.address.state()}`,
            description: `${faker.lorem.paragraph(getRandomArbitrary(4, 7))}`,
            features: [
                'WiFi',
                'Kitchen',
                'Cooking basics',
                'Free parking',
                'Books',
                'TV',
            ],
            subtitle: `Entire ${faker.helpers.arrayElement(
                houseTypes
            )} by ${faker.name.firstName()}`,
            rating: getRandomArbitrary(100, 500) / 100,
            hosted_by: {
                user_id: getRandomArbitrary(1, 1000),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
            },
            config: {
                max_guests: getRandomArbitrary(2, 12),
                bedrooms: getRandomArbitrary(1, 5),
                bathrooms: getRandomArbitrary(1, 4),
                beds: getRandomArbitrary(1, 10),
            },
            pricing: {
                price_per_night: getRandomArbitrary(80, 800),
                min_guests: getRandomArbitrary(0, 6),
                price_per_extra_guest: getRandomArbitrary(10, 50),
                service_fee_factor: getRandomArbitrary(5, 15) / 100,
            },
        };
    };

    getProperties = (_accessToken: string | null): Promise<void> => {
        const maxIdx = this.maxindex;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    Array.from(Array(12)).forEach((_, _i) => {
                        this.properties.push({
                            id: uuidv4(),
                            index: _i + this.maxindex + 1,
                            images: Array.from(
                                Array(getRandomArbitrary(1, 5)).keys()
                            ).map((_x, _i) => ({
                                path: `https://picsum.photos/id/${getRandomArbitrary(
                                    10,
                                    300
                                )}/300/200`,
                                label: 'Placeholder Label',
                                id: uuidv4(),
                            })),
                            highlights: {
                                short_address: `${faker.address.city()}, ${faker.address.state()}`,
                                rating: (
                                    getRandomArbitrary(100, 500) / 100
                                ).toString(),
                                price: `$${getRandomArbitrary(
                                    50,
                                    500
                                )} per night`,
                            },
                            body: `This is much longer content of the card. It can contain text, images, references, etc. This is the
                                            kind of text you see when you expand the card and a lot more information shows up. You will have a lot more details here
                                            about all sorts of things.`,
                        });
                    })
                );
            }, 2000);
        });
    };
}

export default new PropertyStore();
