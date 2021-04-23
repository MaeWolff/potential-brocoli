export const apiHost = "http://localhost:3001";

export enum ApiRoutes {
  USER_AUTH_LOGIN = "/auth/login", // POST
  USER_AUTH_REGISTER = "/auth/register", // POST

  USER_ME = "/user/me", // GET
  USER_UPDATE_CREDENTIALS = "/user/update-credentials", // PATCH
}

/* ---- OTHER WAY TO WRITE IT -----
   export const ApiRoutes = {
    USER_REGISTER: "/register",
  } as const;  */

// DOCU : const as const (https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/)
