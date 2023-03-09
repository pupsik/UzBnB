import { observable, action, computed, makeObservable } from 'mobx';
import { faker } from '@faker-js/faker';
import { getRandomArbitrary, capitalizeFirstLetter } from '../utilities';
import { PropertySummaries, PropertyImages, PropertyDetails } from '../interfaces/Property';
import { houseTypes, houseAdjective, houseLocation } from '../constants/fake_picklists';
import api from '../service/api';


export class PropertyStore {
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
        return Array.from(Array(5).keys()).map(
            (_x, _i) => ({
                id: id,
                path: `https://picsum.photos/id/${getRandomArbitrary(
                    10,
                    300
                )}/300/200`,
                label: 'Placeholder Label',
            })
        );
    };

    getPropertyDetails = (id:number):PropertyDetails => {

        const start = capitalizeFirstLetter(
            `${faker.helpers.arrayElement(houseAdjective)}`
        );

        const title = `${start} ${faker.helpers.arrayElement(houseTypes)} 
                        ${faker.helpers.arrayElement(houseLocation)} `;

        return {
            id: id,
            title: title,
            review_count: getRandomArbitrary(5,500),
            short_address: `${faker.address.city()}, ${faker.address.state()}`,
            description: `${faker.lorem.paragraph(getRandomArbitrary(4,7))}`,
            features: [],
            subtitle: `Entire ${faker.helpers.arrayElement(houseTypes)} by ${faker.name.firstName()}`,
            rating: (getRandomArbitrary(100, 500) / 100),
            hosted_by: {
                user_id: getRandomArbitrary(1,1000),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName()
            },
            config: {
                max_guests: getRandomArbitrary(2,12), 
                bedrooms: getRandomArbitrary(1,5), 
                bathrooms: getRandomArbitrary(1,4), 
                beds: getRandomArbitrary(1,10)
            }
        };
    };

    getProperties = () => {
        const maxIdx = this.maxindex;
        //api.get('listings');
        return Array.from(Array(this.pageSize)).forEach((_, idx) => {
            this.properties.push({
                index: idx + maxIdx + 1,
                id: idx + maxIdx +1, 
                images: Array.from(Array(getRandomArbitrary(1, 5)).keys()).map(
                    (_x, _i) => ({
                        path: `https://picsum.photos/id/${getRandomArbitrary(
                            10,
                            300
                        )}/300/200`,
                        label: 'Placeholder Label',
                        id: idx + maxIdx +1
                    })
                ),
                highlights: {
                    short_address: `${faker.address.city()}, ${faker.address.state()}`,
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

export default new PropertyStore();
