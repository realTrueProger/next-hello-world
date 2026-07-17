import {notFound} from "next/navigation";

export default async function ProductDetails({params}: {
    params: Promise<{ productId: string }>
}) {
    const {productId} = await params;

    if (parseInt(productId) > 1000) {
        notFound()
    }

    if (parseInt(productId) === 666) {
        throw new Error('666 not allowed')
    }

    return (
        <h1>Product {productId}</h1>
    )
}