import { ErrorMessage, Field } from "formik";
import FormComponent from "../components/Formik";
import { loginSchema } from "../schema/loginSchema";
import styles from "./SignIn.module.css";
import boto from "../assets/Union.svg";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { fetchLogin } from "../services/config";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "sonner";
import Loader from "../components/Loader";

// ====================object for sign in ===================
const loginObject = {
  username: "",
  password: "",
};

function SignIn() {
  const navigate = useNavigate();

  // =================use Effect======================
  useEffect(() => {
    const isToken = Cookies.get("token");
    if (isToken) navigate("/");
  }, []);
  //=====================submit event====================
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: fetchLogin,
    onSuccess: (res) => {
      Cookies.set("token", res.data.token, { expires: 7 });
      toast.success("ورود با موفقیت انجام شد", {
        duration: 1500,
        onAutoClose: () => navigate("/"),
      });
    },
    onError: (err) => {
      toast.error("کاربر با این مشخصات وجود ندارد!");
    },
  });
  const submitHandler = (value) => {
    mutate(value);
  };

  //====================jsx=============================
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <img src={boto} alt="botostart" />
        <h1 className=" text-2xl font-bold h-[50px] mt-[15px]">فرم ورود</h1>
        <FormComponent
          object={loginObject}
          submitHandler={submitHandler}
          schema={loginSchema}
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
          <button type="submit">
            {isPending ? (
              <span>
                <Loader />
              </span>
            ) : (
              "ورود"
            )}
          </button>
        </FormComponent>
        <Link to="/register" className=" text-right w-full text-[#3A8BED]">
          ایجاد حساب کاربری!
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
