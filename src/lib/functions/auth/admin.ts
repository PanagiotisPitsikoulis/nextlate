import { getUserId } from "@/lib/globals/user";

export async function isAdmin() {
  const userId = await getUserId();
  const adminId = process.env.ADMIN_USER_ID;
  if (userId !== adminId) {
    return false;
  }
  return true;
}
