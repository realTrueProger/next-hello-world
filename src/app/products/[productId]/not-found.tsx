"use client";
import {usePathname} from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();

    return (
        <h1>Product not found for {pathname.split('/').at(-1)}</h1>
    )
}