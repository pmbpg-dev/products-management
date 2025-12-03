import styles from "./ProductsToolbar.module.css";
import settingSvg from "../../assets/setting.svg";

function ProductsToolbar() {
  return (
    <div className="flex justify-between items-center w-full h-[60px] mt-[30px] mb-[10px]">
      <div className="flex">
        <img src={settingSvg} alt="setting" className="ml-[10px]" />
        <p>مدیریت کالا</p>
      </div>
      <div>
        <button className="bg-[#55A3F0] text-[#fff] p-[10px] rounded-[10px]">
          افزودن محصول
        </button>
      </div>
    </div>
  );
}

export default ProductsToolbar;
