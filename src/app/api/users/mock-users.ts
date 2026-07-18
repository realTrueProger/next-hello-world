export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

export const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 28,
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 31,
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        age: 24,
    },
    {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        age: 35,
    },
    {
        id: 5,
        name: "Michael Wilson",
        email: "michael@example.com",
        age: 42,
    },
];