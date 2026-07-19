import { users } from "@/app/api/users/mock-users";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(
    _request: Request,
    { params }: RouteContext
) {
    const { id } = await params;
    const userId = Number(id);

    if (Number.isNaN(userId)) {
        return Response.json(
            { error: "Invalid user id" },
            { status: 400 }
        );
    }

    const user = users.find(user => user.id === userId);

    if (!user) {
        return Response.json(
            { error: "User not found" },
            { status: 404 }
        );
    }

    return Response.json(user);
}

export async function DELETE(
    _request: Request,
    { params }: RouteContext
) {
    const { id } = await params;
    const userId = Number(id);

    if (Number.isNaN(userId)) {
        return Response.json(
            { error: "Invalid user id" },
            { status: 400 }
        );
    }

    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return Response.json(
            { error: "User not found" },
            { status: 404 }
        );
    }

    const [deletedUser] = users.splice(userIndex, 1);

    return Response.json(deletedUser);
}