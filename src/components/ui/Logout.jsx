import { motion } from "motion/react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

function Logout({ seIsLogout }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -80, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -80, scale: 0 }}
      className=" p-[15px] w-[100px] h-[120px] bg-white flex items-end justify-center absolute bottom-[-110px] rounded shadow border border-[#e4e4e4]"
    >
      <button
        onClick={logoutHandler}
        className=" h-[25px] bg-[#f43f5e] text-white px-4 rounded"
      >
        خروج
      </button>
      <button
        onClick={() => seIsLogout(false)}
        className=" absolute top-[5px] right-[5px] font-bold border border-[#e4e4e4] px-[7px] rounded-[5px]"
      >
        x
      </button>
    </motion.div>
  );
}

export default Logout;
