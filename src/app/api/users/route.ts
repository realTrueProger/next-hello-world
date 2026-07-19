import {User, users} from "@/app/api/users/mock-users";
import {NextRequest} from "next/server";

type CreateUserDto = Omit<User, "id">;

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const nameQuery = searchParams.get("name");

    if (nameQuery) {
        return Response.json(users.filter(user => user.name.includes(nameQuery)));
    }

    return Response.json(users)
}

export async function POST(request: Request) {
    const user: CreateUserDto = await request.json();

    const newUser: User = {
        id: users.length + 1,
        ...user
    }

    users.push(newUser);

    return Response.json(newUser, {status: 201});
}