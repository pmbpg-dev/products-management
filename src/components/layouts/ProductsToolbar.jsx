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
import { clearSelect } from "../../feature/productsSlice";

function ProductsToolbar() {
  const [isShowModule, setIsShowModule] = useState(false);
  const isDelete = useSelector(selectBulkDelete);
  const dispatch = useDispatch();
  const showHandler = () => {
    if (isDelete) {
      dispatch(clearSelect());
      dispatch(hideBulkDelete());
    } else {
      dispatch(showBulkDelete());
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
              onClick={() => setIsShowModule(true)}
              className={styles.delete}
            >
              حذف
            </motion.button>
          )}
        </AnimatePresence>
        <button onClick={showHandler} className={styles.select}>
          {isDelete ? "لغو" : "انتخاب"}
        </button>
        <button className={styles.adding}>افزودن محصول</button>
      </div>
      <AnimatePresence>
        {isShowModule && <Confirm setIsShow={setIsShowModule} />}
      </AnimatePresence>
    </div>
  );
}

export default ProductsToolbar;
