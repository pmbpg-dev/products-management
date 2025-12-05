import { useState } from "react";
import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import styles from "./Product.module.css";
import { AnimatePresence } from "motion/react";
import Confirm from "../modules/Confirm";
import { useDispatch, useSelector } from "react-redux";
import { selectBulkDelete } from "../../feature/uiSlice";
import { toggleSelect } from "../../feature/productsSlice";
function Product({ p }) {
  const [isDelete, setIsDelete] = useState(false);
  const store = useSelector(selectBulkDelete);
  const dispatch = useDispatch();

  const changeHandler = () => {
    dispatch(toggleSelect(p.id));
  };
  return (
    <tr className={styles.container}>
      <td>
        {store && <input type="checkbox" onChange={changeHandler} />}
        {p.name}
      </td>
      <td>{p.quantity}</td>
      <td>{p.price} هزار تومان</td>
      <td>{p.id}</td>
      <td>
        {" "}
        <button>
          <img src={edit} alt="edit" />
        </button>
        <button onClick={() => setIsDelete(true)}>
          <img src={trash} alt="edit" />
        </button>
      </td>
      <AnimatePresence>
        {isDelete ? <Confirm setIsShow={setIsDelete} key="box" /> : null}
      </AnimatePresence>
    </tr>
  );
}

export default Product;
