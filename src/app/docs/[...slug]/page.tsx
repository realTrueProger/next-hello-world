export default async function Docs({params}: {
    params: Promise<{ slug: string[] }>
}) {
    const {slug} = await params;

    return (
        <h1>Catch all segments example: {JSON.stringify(slug)}</h1>
    )
}