"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import lucia from "@/lib/globals/auth";
import { validateRequest } from "./validate";

export async function signOut() {
  // Validate the request and get the session
  const { session } = await validateRequest();
  if (!session) {
    redirect("/sign-in");
    return {
      error: "Unauthorized",
    };
  }

  // Invalidate the session
  await lucia.invalidateSession(session.id);
  // Create a blank session cookie to clear the existing session
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  redirect("/sign-in");
}
