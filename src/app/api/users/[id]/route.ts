import {users} from "@/app/api/users/mock-users";

export async function GET(_request: Request, {params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const userId = Number(id);

    if (Number.isNaN(userId)) {
        return Response.json(
            { error: "Invalid user id" },
            { status: 400 }
        );
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
        return Response.json(
            { error: "User not found" },
            { status: 404 }
        );
    }

    return Response.json(user);
}