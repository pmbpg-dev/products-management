import { object, ref, string } from "yup";

export const signUpSchema = object().shape({
  username: string().required("لطفا نام کاربری را وارد کنید"),
  password: string()
    .required("لطفا رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید بیشتر از 8 کارکتر باشد"),
  passwordConfirm: string()
    .oneOf([ref("password"), null], "رمز عبور باید یکی باشد! ")
    .required("تایید رمز عبور را وارد کنید."),
});
