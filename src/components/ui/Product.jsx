import { useState } from "react";
import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import styles from "./Product.module.css";
import { AnimatePresence } from "motion/react";
import Confirm from "../modules/Confirm";
import { useDispatch, useSelector } from "react-redux";
import { selectBulkDelete } from "../../feature/uiSlice";
import { toggleSelect } from "../../feature/productsSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../../services/config";
import { toast } from "sonner";
import AddEditProducts from "../modules/Add&EditProducts";

function Product({ p }) {
  // ==============values ========================
  const [isDelete, setIsDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const store = useSelector(selectBulkDelete);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  // =============react query===================
  const { mutate } = useMutation({
    mutationKey: ["delete"],
    mutationFn: deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("حذف با موفقیت انجام شد.");
      setIsDelete(false);
    },
    onError: () => {
      toast.error("در حذف مشکلی پیش آمد دوباره امتحان کنید!");
    },
  });

  // =================events=====================
  const changeHandler = () => {
    dispatch(toggleSelect(p.id));
  };
  const deleteHandler = () => {
    mutate(p.id);
  };
  // =================jsx====================
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
        <button onClick={() => setIsEditing(true)}>
          <img src={edit} alt="edit" />
        </button>
        <button onClick={() => setIsDelete(true)}>
          <img src={trash} alt="trash" />
        </button>
        <AnimatePresence>
          {isDelete && (
            <Confirm
              setIsShow={setIsDelete}
              deleteHandler={deleteHandler}
              key="box"
            />
          )}
          {isEditing && (
            <AddEditProducts
              mode={"edit"}
              data={p}
              setIsShowForm={setIsEditing}
            />
          )}
        </AnimatePresence>
      </td>
    </tr>
  );
}

export default Product;
