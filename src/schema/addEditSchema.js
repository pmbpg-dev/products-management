import { number, object, string } from "yup";

export const addEditSchema = object().shape({
  name: string().required(".نام کالا را وارد کنید."),
  quantity: number()
    .required(".تعداد محصول را وارد کنید")
    .min(1, ".تعداد باید بیشتر از 1 باشد!"),
  price: number(".قیمت باید عدد باشد")
    .required(".قیمت را وارد کنید")
    .min(1, ".قیمت باید بیشتراز 1 باشد!"),
});
