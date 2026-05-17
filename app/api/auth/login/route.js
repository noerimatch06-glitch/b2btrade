import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const { username, password } = body;

    if (!username || !password) {
      return Response.json(
        {
          message: "Username and password required",
        },
        {
          status: 400,
        },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return Response.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    if (user.password !== password) {
      return Response.json(
        {
          message: "Wrong password",
        },
        {
          status: 401,
        },
      );
    }

    const cookieStore = await cookies();

    cookieStore.set(
      "session",
      JSON.stringify({
        username: user.username,
        role: user.role,
      }),
    );

    return Response.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
