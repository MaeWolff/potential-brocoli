// TODO: FIX THIS!!!! WITH `CredentialsForm.tsx`

import axios from "axios";
import { MixPanel } from "../utils/MixPanel";
import { apiHost, ApiRoutes } from "../ApiRoutes";

interface IUserCredentials {
  credentials: [
    {
      shopName: string;
      shopPassword: string;
      shopApiKey: string;
    }
  ];
}

export default async function fetchUpdateUserCredentials({
  credentials,
}: IUserCredentials) {
  const body = {
    credentials: [
      {
        shop_name: credentials[0].shopName,
        shop_password: credentials[0].shopPassword,
        shop_apiKey: credentials[0].shopApiKey,
      },
    ],
  };

  try {
    await axios.patch(`${apiHost}${ApiRoutes.USER_UPDATE_CREDENTIALS}`, body, {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    });

    MixPanel.track("Credentials shopify updated");
  } catch (err) {
    console.log(err);
  }
}
