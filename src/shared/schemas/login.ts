import * as yup from "yup";

export const login = yup.object({
  email: yup.string().email("Invalid email.").required("Required field."),
  password: yup
    .string()
    .max(6, "Must have a maximum of 6 characters.")
    .required("Required field."),
});
