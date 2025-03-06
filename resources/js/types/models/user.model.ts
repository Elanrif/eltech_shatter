export type  User = {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
}

export interface Post {
    name: string;
    message:string
}