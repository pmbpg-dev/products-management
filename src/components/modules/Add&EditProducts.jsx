import styles from "./Add&EditProducts.module.css";
import FormComponent from "../Formik";

import { ErrorMessage, Field } from "formik";
import { addEditSchema } from "../../schema/addEditSchema";
import { useMutation } from "@tanstack/react-query";
import { editProduct, postProduct } from "../../services/config";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../feature/productsSlice";
import { motion } from "motion/react";
import Loader from "../Loader";

function AddEditProducts({ mode, data, setIsShowForm }) {
  const dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationKey: mode === "add" ? ["addProduct"] : ["editProduct"],
    mutationFn: mode === "add" ? postProduct : editProduct,
    onSuccess: (data, variables) => {
      mode === "add"
        ? dispatch(addProduct(variables))
        : dispatch(updateProduct(variables));

      toast.success(
        `محصول با موفقیت ${mode === "add" ? "اضافه" : "ویرایش"} شد!`
      );
      setIsShowForm(false);
    },
    onError: (err, variables) => {
      console.log(err, variables);
      toast.error(
        `در ${mode === "add" ? "ایجاد" : "ویرایش"} محصول مشکلی پیش آمد!`
      );
    },
  });

  const submitHandler = (value) => {
    mutate(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.2 }}
        className={styles.box}
      >
        <p>{mode === "add" ? "ایجاد محصول جدید" : "ویرایش اطلاعات"}</p>
        <FormComponent
          object={data}
          submitHandler={submitHandler}
          schema={addEditSchema}
        >
          <div className={styles.inputs}>
            <label>نام کالا</label>
            <Field name="name" type="name" placeholder="نام کالا" />
            <ErrorMessage name="name" component="small" />
          </div>
          <div className={styles.inputs}>
            <label>تعداد موجودی</label>
            <Field name="quantity" type="number" placeholder="تعداد" />
            <ErrorMessage name="quantity" component="small" />
          </div>
          <div className={styles.inputs}>
            <label>قیمت</label>
            <Field name="price" type="number" placeholder="قیمت" />
            <ErrorMessage name="price" component="small" />
          </div>
          <div className={styles.buttons}>
            <button type="submit">
              {isPending ? (
                <Loader />
              ) : mode === "add" ? (
                "ایجاد"
              ) : (
                "ثبت اطلاعات جدید"
              )}
            </button>
            <button onClick={() => setIsShowForm(false)}>انصراف</button>
          </div>
        </FormComponent>
      </motion.div>
    </motion.div>
  );
}

export default AddEditProducts;
