import axios from "axios";
import { MixPanel } from "../../utils/MixPanel";
import { apiHost, ApiRoutes } from "../../ApiRoutes";

interface IUserRegister {
  email: string;
  password: string;
}

export default async function fetchUserRegister({
  email,
  password,
}: IUserRegister) {
  const body = { email, password };

  try {
    await axios.post(`${apiHost}${ApiRoutes.USER_AUTH_REGISTER}`, body);

    MixPanel.identify(body.email);
    MixPanel.track("Successful register");
    MixPanel.people.set({
      $email: body.email,
    });
  } catch (err) {
    MixPanel.track("Unsuccessful register");
    console.log(err);
  }
}
