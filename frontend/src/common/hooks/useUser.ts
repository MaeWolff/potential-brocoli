import axios from "axios";
import useSWR from "swr";
import { apiHost, ApiRoutes } from "../ApiRoutes";

interface IUser {
  uuid: number;
  email: string;
  password: string;
  createdAt: Date;
  credentials: [
    {
      shop_name: string;
      shop_password: string;
      shop_apiKey: string;
    }
  ];
}
interface useUserProps {
  user: IUser;
  mutate: any; //TODO: search other type here
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
    user: data,
    mutate,
  };
}
