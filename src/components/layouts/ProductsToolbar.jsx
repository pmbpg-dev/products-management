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
import { clearSelect, selectProductsDelete } from "../../feature/productsSlice";
import { toast } from "sonner";
import AddEditProducts from "../modules/Add&EditProducts";

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
        {isShowModule && <Confirm setIsShow={setIsShowModule} />}
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
