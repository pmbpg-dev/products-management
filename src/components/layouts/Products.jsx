import Product from "../ui/Product";
import styles from "./Products.module.css";

function Products({ filtered }) {
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
