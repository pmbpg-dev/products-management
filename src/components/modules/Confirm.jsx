import closePng from "../../assets/Close.png";
import { motion } from "motion/react";
import styles from "./Confirm.module.css";

function Confirm({ setIsShow, deleteHandler }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.2 }}
        className={styles.box}
      >
        <img src={closePng} alt="close" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div>
          <button className={styles.delete} onClick={deleteHandler}>
            حذف
          </button>
          <button className={styles.cancel} onClick={() => setIsShow(false)}>
            لغو
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Confirm;
