import * as Yup from "yup";

import { REQUIRED_MSG } from "../formValidationConstants";

export const CredentialsValidationSchema = Yup.object({
  shopifyName: Yup.string().required(REQUIRED_MSG),

  shopifyPassword: Yup.string().required(REQUIRED_MSG),

  shopifyKey: Yup.string().required(REQUIRED_MSG),
});
