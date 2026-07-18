import {users} from "@/app/api/users/mock-users";

export async function GET() {
    return Response.json(users)
}