import axios from "axios";
import useSWR from "swr";
import { apiHost, ApiRoutes } from "../ApiRoutes";

export interface useUserProps {
  data: {
    uuid: number;
    email: string;
    password: string;
    shopName?: string;
    createdAt: Date;
  };
  mutate: any;
}

export function useUser(): useUserProps {
  const { data, mutate } = useSWR(
    `${apiHost}${ApiRoutes.USER_ME}`,
    async () => {
      const response = await axios.get(`${apiHost}${ApiRoutes.USER_ME}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });
      return response.data;
    }
  );

  return {
    data,
    mutate,
  };
}
