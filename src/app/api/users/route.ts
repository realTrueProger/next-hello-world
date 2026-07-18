import {User, users} from "@/app/api/users/mock-users";

type CreateUserDto = Omit<User, "id">;

export async function GET() {
    return Response.json(users)
}

export async function POST(request: Request) {
    const user: CreateUserDto = await request.json();

    const newUser: User = {
        id: users.length + 1,
        ...user
    }

    users.push(newUser);

    return Response.json(newUser, { status: 201 });
}