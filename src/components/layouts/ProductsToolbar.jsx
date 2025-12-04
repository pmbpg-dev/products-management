import styles from "./ProductsToolbar.module.css";
import settingSvg from "../../assets/setting.svg";
import { useState } from "react";
import Confirm from "../modules/Confirm";
import { AnimatePresence } from "motion/react";

function ProductsToolbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-[60px] mt-[30px] mb-[10px]">
      <div className="flex">
        <img src={settingSvg} alt="setting" className="ml-[10px]" />
        <p>مدیریت کالا</p>
      </div>
      <div>
        <button
          onClick={() => setIsShow(true)}
          className="bg-[#55A3F0] text-[#fff] p-[10px] rounded-[10px]"
        >
          افزودن محصول
        </button>
      </div>
      <AnimatePresence>
        {isShow ? <Confirm setIsShow={setIsShow} key="box" /> : null}
      </AnimatePresence>
    </div>
  );
}

export default ProductsToolbar;
