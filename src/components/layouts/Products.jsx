import { useState } from "react";
import Product from "../ui/Product";
import styles from "./Products.module.css";
import { AnimatePresence } from "motion/react";
import AddEditProducts from "../modules/Add&EditProducts";

const data = {
  name: "",
  price: 0,
  quantity: 0,
};

function Products({ filtered }) {
  const [isShowForm, setIsShowForm] = useState(false);

  if (!filtered.length)
    return (
      <div className={styles.container2}>
        <p className={styles.header}> کالا اضافه کنید!</p>
        <button className={styles.addBtn} onClick={() => setIsShowForm(true)}>
          +
        </button>
        <AnimatePresence>
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
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((p) => (
            <Product p={p} key={p.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
