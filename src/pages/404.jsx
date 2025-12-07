import React, { useEffect } from "react";
import notFound from "../assets/404.jpg";
import { Link } from "react-router";

function NotFounded() {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div className=" w-dvw h-dvh bg-[#010101] flex flex-col items-center justify-evenly">
      <img src={notFound} alt="404" className=" h-1/2" />
      <Link to={"/"} className=" text-[#fff] border p-[10px] rounded-2xl">
        Go Main
      </Link>
    </div>
  );
}

export default NotFounded;
