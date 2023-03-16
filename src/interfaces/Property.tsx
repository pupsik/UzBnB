import { User } from './User';

export interface PropertyImage {
    id: number;
    path: string;
    label: string;
}

export type PropertyImages = Array<PropertyImage>;

export interface PropertySummary {
    index: number;
    id: number;
    images: PropertyImages;
    highlights: { short_address: string; rating: string; price: string };
    body: string;
}

export interface PropertyPricingDetails {
    price_per_night: number;
    min_guests: number;
    price_per_extra_guest: number;
    service_fee_factor: number;
}

export type Review = {
    review_id: number;
    review_by: User;
    review_text: string;
};

export interface PropertyReviews {
    id: number;
    reviews: any[];
}

export interface PropertyDetails {
    id: number;
    title: string;
    short_address: string;
    review_count: number;
    description: string;
    features?: string[];
    subtitle: string;
    rating: number;
    hosted_by: User;
    config: {
        max_guests: number;
        bedrooms: number;
        bathrooms: number;
        beds: number;
    };
    pricing: PropertyPricingDetails;
}

export type PropertySummaries = Array<PropertySummary>;
