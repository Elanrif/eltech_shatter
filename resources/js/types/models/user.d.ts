export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    posts: Post[] | null
    likes: Likes[] | null
}

export interface Post {
    id: number;
    title: string;
    image?: string;
    content?: string;
    comments: Comment[] | null;
    user: User;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Comment {
    id: number;
    user: User;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface Response {
    id: number;
    response: string;
    user: User
}

export interface Likes {
    id: number;
    count: number;
}