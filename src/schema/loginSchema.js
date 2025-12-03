import { object, string } from "yup";

export const loginSchema = object().shape({
  username: string().required("لطفا نام کاربری را وارد کنید"),
  password: string()
    .required("لطفا رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید بیشتر از 8 کارکتر باشد"),
});
