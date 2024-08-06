import { redirect } from "next/navigation";
import { validateRequest } from "../functions/auth/validate";

export async function getUser() {
  const res = await validateRequest();
  return res.user;
}

export async function getSession() {
  const res = await validateRequest();
  return res.session;
}

export async function getUserId() {
  const res = await validateRequest();
  if (!res.user?.id) {
    redirect("/");
  }
  return res.user?.id;
}
