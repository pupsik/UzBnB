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

export interface PropertyDetails {
    id: number;
    title: string;
    short_address: string;
    review_count: number;
    description: string;
    features?: string[];
    subtitle: string;
    rating: number;
    hosted_by: {
        user_id: number;
        first_name: string;
        last_name: string;
    };
    config: {
        max_guests: number;
        bedrooms: number;
        bathrooms: number;
        beds: number;
    };
}

export type PropertySummaries = Array<PropertySummary>;
