import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const { username, newPassword } = body;

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return Response.json({
        message: "User not found",
      });
    }

    await prisma.user.update({
      where: {
        username,
      },
      data: {
        password: newPassword,
      },
    });

    return Response.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      message: "Internal server error",
    });
  }
}
