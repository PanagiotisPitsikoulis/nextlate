import { Lucia } from "lucia";
import { adapter } from "./adapter";

const luciaSingleton = () => {
  return new Lucia(adapter, {
    sessionCookie: {
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === "production",
      },
    },
    getUserAttributes: (attributes) => {
      return {
        // attributes has the type of DatabaseUserAttributes
        username: attributes.username,
      };
    },
  });
};

declare const globalThis: {
  luciaGlobal: ReturnType<typeof luciaSingleton>;
} & typeof global;

const lucia = globalThis.luciaGlobal ?? luciaSingleton();

export default lucia;

if (process.env.NODE_ENV !== "production") globalThis.luciaGlobal = lucia;

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
}
