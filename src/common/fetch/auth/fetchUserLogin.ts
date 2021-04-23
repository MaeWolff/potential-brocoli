import axios from "axios";
import { MixPanel } from "../../utils/MixPanel";
import { apiHost, ApiRoutes } from "../../ApiRoutes";

interface IUserLogin {
  email: string;
  password: string;
}

export default async function fetchUserLogin({ email, password }: IUserLogin) {
  const body = { email, password };

  return await axios.post(`${apiHost}${ApiRoutes.USER_AUTH_LOGIN}`, body).then(
    (response) => {
      const token = response.data.token;

      if (!token) {
        console.log("authentification failed"); // TODO: set frontend message with UI
      } else {
        localStorage.setItem("userToken", token);

        MixPanel.identify(body.email);
        MixPanel.track("Successful login");
      }
    },
    (error) => {
      MixPanel.track("Unsuccessful login");
      console.log(error);
    }
  );
}
