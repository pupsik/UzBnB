import { faker } from '@faker-js/faker';
import { observable, action, computed, makeObservable } from 'mobx';

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
import api from '../../service/api';
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
                email: faker.internet.email(),
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

    getProperties = (accessToken: string | null): Promise<void> => {
        const maxIdx = this.maxindex;

        return api.get('properties/list', accessToken).then((response) => {
            response.forEach((x, idx) => {
                x['index'] = idx + maxIdx + 1;
                this.properties.push(x);
            });
            return response;
        });
    };
}

export default new PropertyStore();
