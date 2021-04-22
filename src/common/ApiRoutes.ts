export const apiHost = "http://localhost:3001";

export enum ApiRoutes {
  USER_ME = "/user/me",
  USER_UPDATE_CREDENTIALS = "/user/update-credentials",
}

/* ---- OTHER WAY TO WRITE IT -----
   export const ApiRoutes = {
    USER_REGISTER: "/register",
  } as const;  */

// DOCU : const as const (https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/)
