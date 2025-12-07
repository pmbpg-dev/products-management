import styles from "./ProductsToolbar.module.css";
import settingSvg from "../../assets/setting.svg";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideBulkDelete,
  selectBulkDelete,
  showBulkDelete,
} from "../../feature/uiSlice";
import Confirm from "../modules/Confirm";
import {
  clearSelect,
  deleteSelected,
  selectProductsDelete,
} from "../../feature/productsSlice";
import { toast } from "sonner";
import AddEditProducts from "../modules/Add&EditProducts";
import { useMutation } from "@tanstack/react-query";
import { bulkDeleteProducts } from "../../services/config";

const data = {
  name: "",
  price: 0,
  quantity: 0,
};

function ProductsToolbar() {
  const selected = useSelector(selectProductsDelete);
  const [isShowModule, setIsShowModule] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const isDelete = useSelector(selectBulkDelete);
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationKey: ["bulk_delete"],
    mutationFn: bulkDeleteProducts,
    onSuccess: () => {
      dispatch(deleteSelected());
      toast.success("محصولات با موفقیت حذف شدند.");
      setIsShowModule(false);
    },
    onError: () => {
      toast.error("در حذف محصولات مشکلی پیش آمد!");
    },
  });

  // ===========events====================
  const showHandler = () => {
    if (isDelete) {
      dispatch(clearSelect());
      dispatch(hideBulkDelete());
    } else {
      dispatch(showBulkDelete());
    }
  };

  const showConfirmHandler = () => {
    if (selected.length) {
      setIsShowModule(true);
    } else {
      toast.error("محصولی انتخاب نشده است!");
    }
  };
  const bulkDeleteHandler = () => {
    mutate(selected);
  };
  return (
    <div className={styles.container}>
      <div className="flex">
        <img src={settingSvg} alt="setting" className="ml-[10px]" />
        <p className=" text-2xl">مدیریت کالا</p>
      </div>
      <div>
        <AnimatePresence>
          {" "}
          {isDelete && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={showConfirmHandler}
              className={styles.delete}
            >
              حذف
            </motion.button>
          )}
        </AnimatePresence>
        <button onClick={showHandler} className={styles.select}>
          {isDelete ? "لغو" : "انتخاب"}
        </button>
        <button className={styles.adding} onClick={() => setIsShowForm(true)}>
          افزودن محصول
        </button>
      </div>
      <AnimatePresence>
        {isShowModule && (
          <Confirm
            setIsShow={setIsShowModule}
            deleteHandler={bulkDeleteHandler}
          />
        )}
        {isShowForm && (
          <AddEditProducts
            mode={"add"}
            data={data}
            setIsShowForm={setIsShowForm}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductsToolbar;
