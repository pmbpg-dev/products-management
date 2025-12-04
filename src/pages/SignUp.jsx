import styles from "./SignUp.module.css";
import { ErrorMessage, Field } from "formik";
import FormComponent from "../components/Formik";
import { signUpSchema } from "../schema/signUpSchema";
import boto from "../assets/Union.svg";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { fetchRegister } from "../services/config";
import { toast } from "sonner";
import Cookies from "js-cookie";

import { useEffect } from "react";

// ====================object for sign in ===================
const signUpObject = {
  username: "",
  password: "",
  passwordConfirm: "",
};

function SignUp() {
  const navigate = useNavigate();

  // =================use Effect======================
  useEffect(() => {
    const isToken = Cookies.get("token");
    if (isToken) navigate("/");
  }, []);
  //=====================submit event====================
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: fetchRegister,
    onSuccess: async (res) => {
      await toast.success("حساب کاربری ایجاد شد", {
        duration: 1500,
        onAutoClose: () => navigate("/login"),
      });
    },
    onError: (err) => {
      toast.error("این حساب کاربری موجود است!");
    },
  });
  // ----------------------------------------------------
  const submitHandler = (value) => {
    mutate(value);
  };
  //====================jsx=============================
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <img src={boto} alt="botostart" />
        <h1 className=" text-2xl font-bold h-[50px] mt-[15px]">فرم ثبت نام</h1>
        <FormComponent
          object={signUpObject}
          submitHandler={submitHandler}
          schema={signUpSchema}
        >
          <div>
            <Field
              autoComplete="off"
              name="username"
              type="name"
              placeholder="نام کاربری"
            />
            <ErrorMessage name="username" component="small" />
          </div>
          <div>
            <Field
              autoComplete="new-password"
              name="password"
              type="password"
              placeholder="رمز عبور"
            />
            <ErrorMessage name="password" component="small" />
          </div>
          <div>
            <Field
              autoComplete="new-password"
              name="passwordConfirm"
              type="password"
              placeholder="تکرار رمز عبور"
            />
            <ErrorMessage name="passwordConfirm" component="small" />
          </div>
          <button type="submit">ثبت نام</button>
        </FormComponent>
        <Link to="/login" className=" text-right w-full text-[#3A8BED]">
          حساب کاربری دارید؟
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
