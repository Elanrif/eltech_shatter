import { Comment, Likes, Post, Response, User } from "@/types/models/user";

export const userData: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar.jpg',
    email_verified_at: '2023-10-01T12:00:00Z',
    created_at: '2023-09-01T12:00:00Z',
    updated_at: '2023-10-01T12:00:00Z',
    posts: [
        {
            id: 101,
            title: 'My First Post',
            question: 'What do you think about this?',
            imageUrl: 'https://example.com/image.jpg',
            content: 'This is the content of my first post.',
            comments: [
                {
                    id: 1001,
                    user: {
                        id: 2,
                        name: 'Jane Smith',
                        email: 'jane.smith@example.com',
                        avatar: 'https://example.com/avatar2.jpg',
                        email_verified_at: '2023-09-15T12:00:00Z',
                        created_at: '2023-09-10T12:00:00Z',
                        updated_at: '2023-09-15T12:00:00Z',
                        posts: null,
                    },
                    content: 'Great post!',
                    created_at: '2023-10-02T12:00:00Z',
                    updated_at: '2023-10-02T12:00:00Z',
                },
            ],
            user: {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@example.com',
                avatar: 'https://example.com/avatar.jpg',
                email_verified_at: '2023-10-01T12:00:00Z',
                created_at: '2023-09-01T12:00:00Z',
                updated_at: '2023-10-01T12:00:00Z',
                posts: null,
            },
            created_at: '2023-10-01T12:00:00Z',
            updated_at: '2023-10-01T12:00:00Z',
        },
    ],
};

export const postData: Post[] = [
    {
        id: 101,
        question: 'How do you handle work-life balance?',
        content:
            "So, I (26M) live with my girlfriend (26F) in an apartment that I pay for. We've been together for three years, and our relationship is great. We're both working professionals, fully independent, and, like any normal couple, we even have an active sex lifeEnter my mother (54F). She’s always been a little overbearing, but since I moved out when I started dating my gf, I thought things had gotten better. Apparently, I was wrong",
        comments: [
            {
                id: 1001,
                user: {
                    id: 2,
                    name: 'Jane Smith',
                    email: 'jane.smith@example.com',
                    avatar: 'https://example.com/avatar2.jpg',
                    email_verified_at: '2023-09-15T12:00:00Z',
                    created_at: '2023-09-10T12:00:00Z',
                    updated_at: '2023-09-15T12:00:00Z',
                    posts: null,
                },
                content: 'I use time-blocking to manage my schedule. It works wonders!',
                created_at: '2023-10-01T12:00:00Z',
                updated_at: '2023-10-01T12:00:00Z',
            },
        ],
        user: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
            email_verified_at: '2023-10-01T12:00:00Z',
            created_at: '2023-09-01T12:00:00Z',
            updated_at: '2023-10-01T12:00:00Z',
            posts: null,
        },
        created_at: '2023-09-30T12:00:00Z',
        updated_at: '2023-09-30T12:00:00Z',
    },
    {
        id: 102,
        title: 'The Demon slayer must end soon.',
        imageUrl:
            'https://img.freepik.com/photos-gratuite/style-sombre-du-ninja-naruto_23-2151278528.jpg?t=st=1741303449~exp=1741307049~hmac=3fcc8bd0eac9842d5106447a86e7c92baf802c07afe7c859da6b853ff7a84473&w=900',
        comments: [
            {
                id: 1002,
                user: {
                    id: 3,
                    name: 'Alice Johnson',
                    email: 'alice.johnson@example.com',
                    avatar: 'https://example.com/avatar3.jpg',
                    email_verified_at: '2023-09-20T12:00:00Z',
                    created_at: '2023-09-15T12:00:00Z',
                    updated_at: '2023-09-20T12:00:00Z',
                    posts: null,
                },
                content: 'I love the flexibility, but sometimes I miss the office vibe.',
                created_at: '2023-10-02T12:00:00Z',
                updated_at: '2023-10-02T12:00:00Z',
            },
        ],
        user: {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            avatar: 'https://example.com/avatar2.jpg',
            email_verified_at: '2023-09-15T12:00:00Z',
            created_at: '2023-09-10T12:00:00Z',
            updated_at: '2023-09-15T12:00:00Z',
            posts: null,
        },
        created_at: '2023-10-01T12:00:00Z',
        updated_at: '2023-10-01T12:00:00Z',
    },
    {
        id: 103,
        question: 'How do you stay productive?',
        content: 'I often find myself procrastinating. What are your best tips for staying focused and productive?',
        comments: [
            {
                id: 1003,
                user: {
                    id: 4,
                    name: 'Bob Brown',
                    email: 'bob.brown@example.com',
                    avatar: 'https://example.com/avatar4.jpg',
                    email_verified_at: '2023-09-25T12:00:00Z',
                    created_at: '2023-09-20T12:00:00Z',
                    updated_at: '2023-09-25T12:00:00Z',
                    posts: null,
                },
                content: 'I use the Pomodoro Technique. It keeps me focused!',
                created_at: '2023-10-03T12:00:00Z',
                updated_at: '2023-10-03T12:00:00Z',
            },
        ],
        user: {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            avatar: 'https://example.com/avatar3.jpg',
            email_verified_at: '2023-09-20T12:00:00Z',
            created_at: '2023-09-15T12:00:00Z',
            updated_at: '2023-09-20T12:00:00Z',
            posts: null,
        },
        created_at: '2023-10-02T12:00:00Z',
        updated_at: '2023-10-02T12:00:00Z',
    },
    {
        id: 104,
        question: 'What’s your favorite programming language?',
        content:
            "So, I (26M) live with my girlfriend (26F) in an apartment that I pay for. We've been together for three years, and our relationship is great. We're both working professionals, fully independent, and, like any normal couple, we even have an active sex lifeEnter my mother (54F). She’s always been a little overbearing, but since I moved out when I started dating my gf, I thought things had gotten better. Apparently, I was wrong",
        comments: [
            {
                id: 1004,
                user: {
                    id: 5,
                    name: 'Charlie Davis',
                    email: 'charlie.davis@example.com',
                    avatar: 'https://example.com/avatar5.jpg',
                    email_verified_at: '2023-09-30T12:00:00Z',
                    created_at: '2023-09-25T12:00:00Z',
                    updated_at: '2023-09-30T12:00:00Z',
                    posts: null,
                },
                content: 'I love Python for its simplicity and readability.',
                created_at: '2023-10-04T12:00:00Z',
                updated_at: '2023-10-04T12:00:00Z',
            },
        ],
        user: {
            id: 4,
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            avatar: 'https://example.com/avatar4.jpg',
            email_verified_at: '2023-09-25T12:00:00Z',
            created_at: '2023-09-20T12:00:00Z',
            updated_at: '2023-09-25T12:00:00Z',
            posts: null,
        },
        created_at: '2023-10-03T12:00:00Z',
        updated_at: '2023-10-03T12:00:00Z',
    },
];

export const commentData: Comment = {
    id: 1003,
    user: {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        avatar: 'https://example.com/avatar4.jpg',
        email_verified_at: '2023-09-25T12:00:00Z',
        created_at: '2023-09-20T12:00:00Z',
        updated_at: '2023-09-25T12:00:00Z',
        posts: null,
    },
    content: 'Nice comment!',
    created_at: '2023-10-04T12:00:00Z',
    updated_at: '2023-10-04T12:00:00Z',
};

export const responseData: Response = {
    id: 2001,
    response: 'This is a response to a comment.',
    user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://example.com/avatar.jpg',
        email_verified_at: '2023-10-01T12:00:00Z',
        created_at: '2023-09-01T12:00:00Z',
        updated_at: '2023-10-01T12:00:00Z',
        posts: null,
    },
};

export const likesData: Likes = {
    id: 3001,
    count: 42,
};
