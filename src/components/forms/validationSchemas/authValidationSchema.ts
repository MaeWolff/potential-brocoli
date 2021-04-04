import * as Yup from "yup";

import {
  EMAIL_REGEXP,
  INVALID_EMAIL_MSG,
  REQUIRED_MSG,
  TOO_SHORT_MSG,
} from "../formValidationConstants";

export const AuthValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_REGEXP, INVALID_EMAIL_MSG)
    .required(REQUIRED_MSG),

  password: Yup.string().min(6, TOO_SHORT_MSG).required(REQUIRED_MSG),
});
