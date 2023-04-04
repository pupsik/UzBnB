import { PropertyDetails, PropertyImages, PropertyReviews, PropertySummaries } from "../interfaces/Property";

export interface PropertyStoreType {
    properties: PropertySummaries;
    pageSize: number;
    maxindex: number;
    getPropertyImages: (id: number) => PropertyImages;
    getPropertyReviews: (id: number) => PropertyReviews;
    getPropertyDetails: (id: number) => PropertyDetails;
    getProperties: (_accessToken: string | null) => Promise<void>;
  }
