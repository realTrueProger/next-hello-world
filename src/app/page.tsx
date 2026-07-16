"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/products");
    };

    return (
        <main className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Home page</h1>
            <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800"
            >
                Products
            </button>
        </main>
    )
}
