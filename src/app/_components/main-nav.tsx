"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    {href: "/blog", label: "Blog"},
    {href: "/products", label: "Products"},
    {href: "/profile", label: "Profile"},
];

const baseLinkClassName = "inline-flex min-h-9 items-center rounded-md border px-3.5 text-[15px] font-medium leading-tight no-underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
const activeLinkClassName = "border-blue-600 bg-blue-50 text-blue-800";
const inactiveLinkClassName = "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950";

export default function MainNav() {
    const pathname = usePathname();

    return (
        <header className="border-b border-slate-200 bg-white">
            <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-5 py-4" aria-label="Primary navigation">
                {navLinks.map(({href, label}) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`${baseLinkClassName} ${isActive ? activeLinkClassName : inactiveLinkClassName}`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
