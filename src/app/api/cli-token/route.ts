import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/**
 * Generates a long lived (7 days) token for cli based authentication
 * @returns long lived token for cli requests
 */
export async function GET() {
  const { userId, getToken } = await auth();

  const template = "cli-token";
  if (!userId)
    return NextResponse.json(
      {
        message: "Must log in to authenticate via CLI.",
      },
      { status: 401 }
    );

  const cliToken = await getToken({ template });

  return NextResponse.json(cliToken);
}
