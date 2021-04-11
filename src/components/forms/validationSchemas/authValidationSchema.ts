import * as Yup from "yup";

import {
  EMAIL_REGEXP,
  INVALID_EMAIL_MSG,
  REQUIRED_MSG,
  TOO_SHORT_MSG,
  MUST_MATCH_PASSWORD_MSG,
} from "../formValidationConstants";

export const AuthValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_REGEXP, INVALID_EMAIL_MSG)
    .required(REQUIRED_MSG),

  password: Yup.string().min(6, TOO_SHORT_MSG).required(REQUIRED_MSG),

  passwordConfirmation: Yup.string()
    .min(6, TOO_SHORT_MSG)
    .required(REQUIRED_MSG)
    .oneOf([Yup.ref("password"), null], MUST_MATCH_PASSWORD_MSG),
});

export const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_REGEXP, INVALID_EMAIL_MSG)
    .required(REQUIRED_MSG),

  password: Yup.string().min(6, TOO_SHORT_MSG).required(REQUIRED_MSG),
});
