"use client";

import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};

export default function UserSearch() {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const trimmedQuery = query.trim();

        if (!trimmedQuery) {
            setUsers([]);
            setError("");
            setIsLoading(false);
            return;
        }

        const fetchUsers = async () => {
            setIsLoading(true);
            setError("");

            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?name_like=${encodeURIComponent(trimmedQuery)}`
                );

                if (!response.ok) {
                    throw new Error("Error fetching users");
                }

                const data: User[] = await response.json();

                setUsers(data);
            } catch {
                setError("Something went wrong");
                setUsers([]);
            } finally {
                setIsLoading(false);
            }
        };

        const timer = setTimeout(() => {
            void fetchUsers();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [query]);

    return (
        <div>
            <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search users"
            />

            {isLoading && <div>Loading...</div>}

            {error && <div>Error: {error}</div>}

            {!isLoading && !error && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}