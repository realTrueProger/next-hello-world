import Link from "next/link";

export default function ProductsList() {
    const productLinks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <Link href={"home"}>Home</Link>
            <h1>Product list</h1>
            {productLinks.map(link => (
                <h2 key={link}><Link href={`products/${link}`}>Product {link}</Link></h2>
            ))}
        </>
    )
}