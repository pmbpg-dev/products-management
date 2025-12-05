import styles from "./Header.module.css";
import search from "../../assets/search.png";
import person from "../../assets/person.svg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUserName } from "../../feature/uiSlice";
import { useState } from "react";

function Header() {
  const [isLogout, seIsLogout] = useState(false);
  const name = localStorage.getItem("name");

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <button>
          <img src={search} alt="search" />
        </button>
        <input type="text" placeholder="جستجو کالا" />
      </div>
      <div className={styles.info}>
        <img src={person} alt="person" />
        <div>
          <p>{name}</p>
          <span className=" text-[14px]">مدیر</span>
        </div>
        {/* <div className={styles.logout}>
          <button>خروج از حساب</button>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
