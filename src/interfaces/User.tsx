export interface User {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    username?: string;
    avatar?: string;
}

export interface Auth0User {
    email: string;
    family_name?: string;
    given_name?: string;
    name?: string;
    picture?: string;
}
