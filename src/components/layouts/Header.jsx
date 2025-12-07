import styles from "./Header.module.css";
import search from "../../assets/search.png";
import person from "../../assets/person.svg";

import { useState } from "react";
import { useParams, useSearchParams } from "react-router";
import Logout from "../ui/Logout";
import { AnimatePresence } from "motion/react";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialText = searchParams.get("search") || "";
  const [text, setText] = useState(initialText);
  const [isLogout, seIsLogout] = useState(false);
  const name = localStorage.getItem("name");

  const searchHandler = () => {
    if (!text.trim()) {
      setSearchParams({});
    } else {
      setSearchParams({ search: text });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <button onClick={searchHandler}>
          <img src={search} alt="search" />
        </button>
        <input
          type="text"
          placeholder="جستجو کالا"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles.info}>
        <img onClick={() => seIsLogout(true)} src={person} alt="person" />
        <div className={styles.details}>
          <p>{name}</p>
          <span className=" text-[14px]">مدیر</span>
        </div>
        <AnimatePresence>
          {isLogout && <Logout seIsLogout={seIsLogout} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
