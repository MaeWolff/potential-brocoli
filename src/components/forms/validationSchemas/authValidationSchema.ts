import * as Yup from "yup";

import {
  EMAIL_REGEXP,
  INVALID_EMAIL_MSG,
  REQUIRED_MSG,
  TOO_SHORT_MSG,
  MUST_MATCH_PASSWORD_MSG,
} from "../formValidationConstants";

export enum SubscriptionName {
  GRATIN = "gratin",
  TERRINE = "terrine",
  VELVETY = "velvety",
}

export const RegisterValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_REGEXP, INVALID_EMAIL_MSG)
    .required(REQUIRED_MSG),

  password: Yup.string().min(6, TOO_SHORT_MSG).required(REQUIRED_MSG),

  passwordConfirmation: Yup.string()
    .min(6, TOO_SHORT_MSG)
    .required(REQUIRED_MSG)
    .oneOf([Yup.ref("password"), null], MUST_MATCH_PASSWORD_MSG),

  // subscription: Yup.mixed<SubscriptionName>().oneOf(
  //   Object.values(SubscriptionName)
  // ),
});

export const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EMAIL_REGEXP, INVALID_EMAIL_MSG)
    .required(REQUIRED_MSG),

  password: Yup.string().min(6, TOO_SHORT_MSG).required(REQUIRED_MSG),
});
